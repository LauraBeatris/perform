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
    return {

    }
  }
}

module.exports = UpdateTask
