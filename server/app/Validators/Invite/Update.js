'use strict'

class UpdateInvite {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      invites: 'array',
      'invites.*': 'email'
    }
  }

  get messages () {
    const antl = this.ctx.antl
    return antl.list('validation')
  }
}

module.exports = UpdateInvite
