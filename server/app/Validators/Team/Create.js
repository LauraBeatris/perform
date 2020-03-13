'use strict'

class Team {
  get validateAll() {
    return true;
  }

  get rules () {
    return {
      name: 'required|string'
    }
  }

  get messages () {
    return {
      'name.required': 'The name is required to create a team',
      'name.string': 'The name needs to be a valid string'
    }
  }
}

module.exports = Team
