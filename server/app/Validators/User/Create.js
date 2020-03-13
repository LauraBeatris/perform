'use strict'

class User {
  get validateAll() {
    return true;

  }

  get rules () {
    return {
      name: 'required|string',
      email: 'required|email|unique:users',
      password: 'required|min:6|max:30'
    }
  }

  get messages() {
    return {

    }
  }
}

module.exports = User
