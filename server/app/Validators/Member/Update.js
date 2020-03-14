'use strict'

class UpdateMember {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      roles: 'array',
      'roles.*': 'number'
    }
  }

  get messages () {
    const antl = this.ctx.antl
    return antl.list('validation')
  }
}

module.exports = UpdateMember
