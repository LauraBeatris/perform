'use strict'

const User = use('App/Models/User')
const Invite = use('App/Models/Invite')
const Database = use('Database')

class UserController {
  async index ({ response }) {
    try {
      const users = await User.all()

      return users
    } catch (err) {
      return response.status(err.status || 500).send(
        {
          error: {
            message: 'Something went wrong while trying to list users',
            data: { name: err.name, message: err.message }
          }
        })
    }
  }

  async store ({ request, response }) {
    const data = request.only(['name', 'email', 'password'])
    const trx = await Database.beginTransaction()

    try {
      const user = await User.create(data, trx)

      const existingInvites = Invite.query().where('email', data.email)
      const teams = await existingInvites.pluck('team_id')

      if (teams.length > 0) {
        await user.teams().attach(teams, null, trx)
        await existingInvites.delete(trx)
      }

      await trx.commit()

      return user
    } catch (err) {
      await trx.rollback()
      return response.status(err.status || 500).send(
        {
          error: {
            message: 'Something went wrong while create a user',
            data: { name: err.name, message: err.message }
          }
        })
    }
  }

  async show ({ params, response }) {
    try {
      const user = await User.findOrFail(params.id)

      return user
    } catch (err) {
      return response.status(err.status || 500).send(
        {
          error: {
            message: 'Something went wrong while show a user',
            data: { name: err.name, message: err.message }
          }
        })
    }
  }

  async update ({ params, request, response }) {
    const data = request.only(['name', 'email'])

    try {
      const user = await User.findOrFail(params.id)
      user.merge(data)
      await user.save()

      return user
    } catch (err) {
      return response.status(err.status || 500).send(
        {
          error: {
            message: 'Something went wrong while update a user',
            data: { name: err.name, message: err.message }
          }
        })
    }
  }

  async destroy ({ params, response }) {
    try {
      const user = await User.findOrFail(params.id)
      await user.delete()

      return response.status(200).send({
        sucess: { message: `The user - ${user.name} - was deleted succesfully` }
      })
    } catch (err) {
      return response.status(err.status || 500).send(
        {
          error: {
            message: 'Something went wrong while delete a user',
            data: { name: err.name, message: err.message }
          }
        })
    }
  }
}

module.exports = UserController
