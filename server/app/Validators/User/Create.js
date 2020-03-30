'use strict'

class CreateUser {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      name: 'required|string',
      email: 'required|email|unique:users',
      password: 'required|confirmed|min:6|max:30'
    }
  }

  get messages () {
    const antl = this.ctx.antl
    return antl.list('validation')
  }
}

module.exports = CreateUser
