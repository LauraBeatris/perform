'use strict'

const User = use('App/Models/User')
const Invite = use('App/Models/Invite')
const Notification = use('App/Models/Notification')

const Kue = use('Kue')
const Env = use('Env')
const Database = use('Database')
const MailJob = use('App/Jobs/Mail')

const InviteHook = exports = module.exports = {}

InviteHook.invitation = async (inviteInstance) => {
  const invited = await User.findBy('email', inviteInstance.email) // Invited User
  const user = await inviteInstance.user().fetch() // Invite Creator
  const team = await inviteInstance.team().fetch()

  let jobData = null

  // Verify if the invited user has an account
  if (invited) {
    // Send an confirmation email with the team invite
    jobData = {
      data: { user, invited, email: invited.email, team, redirect_url: `${Env.get('REGISTER_SITE_URL')}/team/projects?team=${team.id}` },
      templates: ['emails/invitation', 'emails/invitation-text'],
      subject: `You were invited to join the ${team.name}`
    }

    Notification.create({
      title: 'Team Invitation',
      description: `<span>You were invited to the <strong>${team.name} Team</strong> by <strong>${user.name}</strong></span>`,
      invite_id: inviteInstance.id,
      links_to: `teams:user:${invited.id}`,
      author_id: user.id,
      user_id: invited.id
    })
  } else {
    // Send an invitation to create an account and join the team
    jobData = {
      data: { user, email: inviteInstance.email, team, redirect_url: `${Env.get('REGISTER_SITE_URL')}?invite=${inviteInstance.id}` },
      templates: ['emails/register_invite', 'emails/register_invite-text'],
      subject: `You were invited to join the ${team.name}`
    }
  }

  Kue.dispatch(MailJob.key, jobData, { attemps: 3 })
}

InviteHook.confirmInvitation = async (inviteInstance) => {
  const trx = await Database.beginTransaction()
  const invite = await Invite.find(inviteInstance.id)

  try {
    const invitedUser = await User.findBy('email', invite.email)

    if (invitedUser && inviteInstance.dirty.confirmed && inviteInstance.confirmed) {
      // Associating the invited user with a team
      await invitedUser.teams().attach(invite.team_id, null, trx)
      await invite.delete(trx)
      await trx.commit()
    }
  } catch (err) {
    await trx.rollback()
  }
}
