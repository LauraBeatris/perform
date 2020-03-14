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
    return {

    }
  }
}

module.exports = UpdateInvite
