'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TaskSchema extends Schema {
  up () {
    this.alter('tasks', (table) => {
      table.integer('project_id')
      .unsigned()
      .references('id')
      .inTable('projects')
      .onDelete('cascade')
      .onUpdate('cascade')
      .notNullable()
    })
  }

  down () {
    this.alter('tasks', (table) => {
      table.dropColumn('project_id')
    })
  }
}

module.exports = TaskSchema
