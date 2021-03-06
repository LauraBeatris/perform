'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProjectSchema extends Schema {
  up () {
    this.alter('projects', (table) => {
      table.string('description')
    })
  }

  down () {
    this.alter('projects', (table) => {
      table.dropColumn('description')
    })
  }
}

module.exports = ProjectSchema
