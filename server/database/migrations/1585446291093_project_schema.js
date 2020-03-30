'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProjectSchema extends Schema {
  up () {
    this.table('projects', (table) => {
      // alter table
    })
  }

  down () {
    this.table('projects', (table) => {
      // reverse alternations
    })
  }
}

module.exports = ProjectSchema
