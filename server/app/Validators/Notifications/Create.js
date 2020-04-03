'use strict'

class CreateNotification {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      title: 'required|string',
      description: 'required|string',
      invite_id: 'number'
    }
  }

  get messages () {
    const antl = this.ctx.antl
    return antl.list('validation')
  }
}

module.exports = CreateNotification
