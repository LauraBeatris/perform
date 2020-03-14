'use strict'

class CreateTask {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      name: 'required|string',
      user_id: 'required|number|integer',
      description: 'string'
    }
  }

  get messages () {
    const antl = this.ctx.antl
    return antl.list('validation')
  }
}

module.exports = CreateTask
