'use strict'

const Role = use('Role')
const Database = use('Database')

/*
  Controller responsable for the teams of the ==> logged user <==
*/
class TeamController {
  async index ({ response, auth }) {
    try {
      const teams = await auth.user.teams().with('user').fetch()

      return teams
    } catch (err) {
      return response.status(err.status || 500).send(
        {
          error: {
            message: 'Something went wrong while trying to list teams',
            data: { name: err.name, message: err.message }
          }
        })
    }
  }

  async store ({ request, response, auth }) {
    const data = request.only(['name'])
    const trx = await Database.beginTransaction()

    try {
      const team = await auth.user.teams().transacting(trx).create({
        ...data,
        user_id: auth.user.id
      })
      const moderator = await Role.findBy('slug', 'moderator')
      const teamMember = await auth.user.teamJoins().transacting(trx).where('team_id', team.id).first()
      await teamMember.roles().attach([moderator.id], null, trx)

      await trx.commit()

      return team
    } catch (err) {
      await trx.rollback()

      return response.status(err.status || 500).send(
        {
          error: {
            message: 'Something went wrong while trying to create a team',
            data: { name: err.name, message: err.message }
          }
        })
    }
  }

  async show ({ params, auth, response }) {
    try {
      const team = await auth.user.teams().where('teams.id', params.id).first()
      return team
    } catch (err) {
      return response.status(err.status || 500).send(
        {
          error: {
            message: 'Something went wrong while trying to show a team',
            data: { name: err.name, message: err.message }
          }
        })
    }
  }

  async update ({ auth, params, request, response }) {
    const data = request.only(['name', 'user_id'])
    try {
      const team = await auth.user.teams().where('teams.id', params.id).first()
      team.merge(data)
      await team.save()

      return team
    } catch (err) {
      return response.status(err.status || 500).send(
        {
          error: {
            message: 'Something went wrong while trying to update a team',
            data: { name: err.name, message: err.message }
          }
        })
    }
  }

  async destroy ({ params, auth, response }) {
    try {
      const team = await auth.user.teams().where('teams.id', params.id).first()
      await team.delete()
      return response.status(200).send({
        success: { message: `The team ${team.name} was successfully deleted` }
      })
    } catch (err) {
      return response.status(err.status || 500).send(
        {
          error: {
            message: 'Something went wrong while trying to create a team',
            data: { name: err.name, message: err.message }
          }
        })
    }
  }
}

module.exports = TeamController
