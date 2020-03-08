'use strict'

const Env = use('Env')

module.exports = {
  connection: Env.get('KUE_CONNECTION', 'local')
}
