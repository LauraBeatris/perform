'use strict'

const BaseExceptionHandler = use('BaseExceptionHandler')
const Env = use('Env')
const Sentry = use('Sentry')
const Youch = require('youch')

class ExceptionHandler extends BaseExceptionHandler {
  async handle (error, { request, response }) {
    if (error.name === 'ValidationException') {
      return response.status(error.status).send(error.messages)
    }

    if (Env.get('NODE_ENV') === 'development') {
      const youchError = new Youch(error, request.request)
      const errorJson = await youchError.toJSON()
      return response.status(error.status || 500).send(errorJson)
    }

    response.status(error.status).send(error.message)
  }

  async report (error, { request }) {
    if (Env.get('NODE_ENV' !== 'development')) {
      return Sentry.captureException(error, request.request)
    }
  }
}

module.exports = ExceptionHandler
