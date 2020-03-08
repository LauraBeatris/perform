'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Project extends Model {
  project () {
    return this.belongsTo('App/Model/Project')
  }
}

module.exports = Project
