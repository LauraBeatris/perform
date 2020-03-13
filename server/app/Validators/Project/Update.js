'use strict'

class Project {
  get validateAll() {
    return true;

  }

  get rules () {
    return {
      title: 'string'
    }
  }

  get messages() {
    return {

    }
  }
}

module.exports = Project
