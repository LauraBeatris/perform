'use strict'

class Team {
  get validateAll() {
    return true;
  }

  get rules () {
    return {
      name: 'string'
    }
  }

  get messages () {
    return {
      'name.string': 'The name needs to be a valid string'
    }
  }
}

module.exports = Team
