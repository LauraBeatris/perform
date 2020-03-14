'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Project extends Model {
  user () {
    return this.belongsTo('App/Model/UserTeam')
  }

  project () {
    return this.belongsTo('App/Model/Project')
  }

  tasks () {
    return this.hasMany('App/Models/Task')
  }
}

module.exports = Project
