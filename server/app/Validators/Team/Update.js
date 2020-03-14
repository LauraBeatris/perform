'use strict'

class UpdateTeam {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      name: 'string'
    }
  }

  get messages () {
    const antl = this.ctx.antl
    return antl.list('validation')
  }
}

module.exports = UpdateTeam
