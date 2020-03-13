'use strict'

const Model = use('Model')

const Hash = use('Hash')

class User extends Model {
  static boot () {
    super.boot()

    this.addHook('beforeSave', async (userInstance) => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password)
      }
    })
  }

  tokens () {
    return this.hasMany('App/Models/Token')
  }

  teams () {
    return this.belongsToMany('App/Models/Team').pivotModel('App/Models/UserTeam')
  }

  teamJoins() {
    return this.hasMany('App/Models/UserTeam')
  }

  async is (expression) {
    const teamMember = await this.teamJoins().where('team_id', this.currentTeam.id).first()
    return teamMember.is(expression)
  }

  async can (expression) {
    const teamMember = await this.teamJoins().where('team_id', this.currentTeam.id).first()
    return teamMember.can(expression)
  }

  async scope (required) {
    const teamMember = await this.teamJoins().where('team_id', this.currentTeam.id).first()
    return teamMember.scope(required)
  }
}

module.exports = User
