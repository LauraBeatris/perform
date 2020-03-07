'use strict'

class TeamController {
  async index ({ response, auth }) {
    try {
      const teams = await auth.user.teams().fetch()

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

    try {
      const team = await auth.user.teams().create({
        ...data,
        user_id: auth.user.id
      })

      return team
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
    const { user } = auth
    const { id } = params
    try {
      const team = await user.teams().where('teams.id', id).first()
      console.log(team)
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
