'use strict'

const UserTeam = use('App/Models/UserTeam')

class MemberController {
  async index({ request }) {
    const { page = 1 } = request.get()
    const members = await UserTeam.query()
    .where('team_id', request.team.id)
    .with('team')
    .with('user')
    .with('roles')
    .paginate(page, 10)

    return members;
  }

  async update({ params, request, response }) {
    const roles = request.input('roles')
    try {
      const member = await UserTeam.findOrFail(params.id)
      await member.roles().sync(roles)
      await member.loadMany(['roles', 'team', 'user'])

      return member;
    } catch (err) {
      return response.status(err.status || 500).send(
        {
          error: {
            message: 'Something went wrong updating the member role',
            data: { name: err.name, message: err.message }
          }
        })
    }
  }
}

module.exports = MemberController
