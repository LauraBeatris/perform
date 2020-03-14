'use strict'

class CreateProject {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      title: 'required|string'
    }
  }

  get messages () {
    const antl = this.ctx.antl
    return antl.list('validation')
  }
}

module.exports = CreateProject
