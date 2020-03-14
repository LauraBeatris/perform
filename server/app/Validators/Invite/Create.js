'use strict'

class CreateInvite {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      invites: 'required|array',
      'invites.*': 'required|email'
    }
  }

  get messages () {
    const antl = this.ctx.antl
    return antl.list('validation')
  }
}

module.exports = CreateInvite
