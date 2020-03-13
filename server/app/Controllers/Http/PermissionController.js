'use strict'

const UserTeam = use('App/Models/UserTeam')

class PermissionController {
  async show({params, response}) {
    try {
      const member = await UserTeam.findOrFail(params.id)

      return {
        permissions: await member.getPermissions(),
        roles: await member.getRoles()
      }
    } catch (err) {
      return response.status(err.status || 500).send(
        {
          error: {
            message: 'Something went wrong while showing the member role',
            data: { name: err.name, message: err.message }
          }
        })
    }
  }
}


module.exports = PermissionController
