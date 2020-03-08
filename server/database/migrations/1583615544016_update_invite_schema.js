'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UpdateInviteSchema extends Schema {
  up () {
    this.alter('invites', (table) => {
      table.boolean('confirmed').defaultTo(false)
    })
  }

  down () {
    this.alter('invites', (table) => {
      table.dropColumn('confirmed')
    })
  }
}

module.exports = UpdateInviteSchema
