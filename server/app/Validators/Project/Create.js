'use strict'

class Project {
  get validateAll() {
    return true;

  }

  get rules () {
    return {
      title: 'required|string'
    }
  }

  get messages() {
    return {

    }
  }
}

module.exports = Project
