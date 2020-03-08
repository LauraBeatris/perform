'use strict'

const Invite = use('App/Models/Invite')

class InviteController {
  async index ({ request, response, auth }) {
    try {
      const invites =
        await Invite
          .query()
          .where({ user_id: auth.user.id })
          .with('team')
          .with('user')
          .fetch()
      return invites
    } catch (err) {
      return response.status(err.status || 500).send(
        {
          error: {
            message: 'Something went wrong while trying to list invites',
            data: { name: err.name, message: err.message }
          }
        })
    }
  }

  async store ({ auth, request, response }) {
    const { invites } = request.all()

    try {
      const data = invites.map(email => ({
        email,
        user_id: auth.user.id,
        team_id: request.team.id
      }))

      const invitedUsers = await Invite.createMany(data)

      return invitedUsers
    } catch (err) {
      return response.status(err.status || 500).send(
        {
          error: {
            message: 'Something went wrong while trying to create a invite',
            data: { name: err.name, message: err.message }
          }
        })
    }
  }

  async show ({ params, response }) {
    try {
      const invite = await Invite.findOrFail(params.id)

      await invite.loadMany(['user', 'team'])

      return invite
    } catch (err) {
      return response.status(err.status || 500).send(
        {
          error: {
            message: 'Something went wrong while trying to show a invite',
            data: { name: err.name, message: err.message }
          }
        })
    }
  }

  async update ({ params, request, response }) {
    const data = request.only(['team_id', 'confirmed'])

    try {
      const invite = await Invite.findOrFail(params.id)

      invite.merge(data)
      await invite.save()
      await invite.loadMany(['user', 'team'])

      return invite
    } catch (err) {
      return response.status(err.status || 500).send(
        {
          error: {
            message: 'Something went wrong while trying to update a invite',
            data: { name: err.name, message: err.message }
          }
        })
    }
  }

  async destroy ({ params, response }) {
    try {
      const invite = await Invite.findOrFail(params.id)
      await invite.load('user')
      const invitedEmail = await invite.getRelated('user').email

      return response.status(200).send({ success: { message: `The invite to ${invitedEmail} was succesfully delivered` } })
    } catch (err) {
      return response.status(err.status || 500).send(
        {
          error: {
            message: 'Something went wrong while trying to delete a invite',
            data: { name: err.name, message: err.message }
          }
        })
    }
  }
}

module.exports = InviteController
