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
    const antl = this.ctx.antl
    return antl.list('validation')
  }
}

module.exports = CreateSession
