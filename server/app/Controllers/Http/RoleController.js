'use strict'

const Role = use('Role')

class RoleController {
  async index () {
    const roles = await Role.query().with('permissions').fetch()
    return roles
  }
}

module.exports = RoleController
