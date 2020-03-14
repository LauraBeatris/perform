'use strict'

class UpdateUser {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      name: 'string',
      email: 'email|unique:users',
      password: 'min:6|max:30'
    }
  }

  get messages () {
    return {

    }
  }
}

module.exports = UpdateUser
