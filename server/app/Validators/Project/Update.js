'use strict'

class UpdateProject {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      title: 'string'
    }
  }

  get messages () {
    const antl = this.ctx.antl
    return antl.list('validation')
  }
}

module.exports = UpdateProject
