'use strict'

class CreateSession {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      email: 'required|email',
      password: 'required|min:6|max:30'
    }
  }

  get messages () {
    return {

    }
  }
}

module.exports = CreateSession
