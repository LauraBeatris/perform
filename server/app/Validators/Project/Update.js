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
    return {

    }
  }
}

module.exports = UpdateProject
