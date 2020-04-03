'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const dateFns = require('date-fns')

class Notification extends Model {
  static boot () {
    super.boot()

    this.addHook('afterCreate', 'NotificationHook.notify')
  }

  static get computed () {
    return ['old']
  }

  getOld ({ created_at }) {
    return dateFns.isYesterday(dateFns.parseISO(created_at))
  }

  invite () {
    return this.belongsTo('App/Models/Invite')
  }

  user () {
    return this.belongsTo('App/Models/User', 'user_id', 'id')
  }

  author () {
    return this.belongsTo('App/Models/User', 'author_id', 'id')
  }
}

module.exports = Notification
