'use strict'

class UpdateTask {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      name: 'string',
      user_id: 'number|integer',
      description: 'string'
    }
  }

  get messages () {
    const antl = this.ctx.antl
    return antl.list('validation')
  }
}

module.exports = UpdateTask
