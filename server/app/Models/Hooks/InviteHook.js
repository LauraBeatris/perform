'use strict'

const User = use('App/Models/User')
const Kue = use('Kue')
const Env = use('Env')
const MailJob = use('App/Jobs/Mail')

const InviteHook = exports = module.exports = {}

InviteHook.invitation = async (invite) => {
  const invited = await User.findBy('email', invite.email)
  const user = await invite.user().fetch()
  const team = await invite.team().fetch()

  let jobData = null

  // Verify if the invited user has an account
  if (!invited) {
    // Send an invitation to create an account and join the team
    jobData = {
      data: { user, email: invite.email, team, redirect_url: `${Env.get('SITE_URL')}/register` },
      templates: ['emails/register_invite', 'emails/register_invite-text'],
      subject: `You were invited to join the ${team.name}`
    }
  } else {
    jobData = {
      data: { user, invited, email: invited.email, team, redirect_url: `${Env.get('SITE_URL')}/invitation` },
      templates: ['emails/invitation', 'emails/invitation-text'],
      subject: `You were invited to join the ${team.name}`
    }
  }

  // Send an confirmation email with the team invite
  Kue.dispatch(MailJob.key, jobData, { attemps: 3 })
}
