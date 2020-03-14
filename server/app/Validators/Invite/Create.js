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
    return {

    }
  }
}

module.exports = CreateInvite
