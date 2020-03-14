'use strict'

class LocaleController {
  async update ({ antl, params, response }) {
    try {
      // Getting the current available locales
      const locales = antl.availableLocales()
      if (locales.includes(params.lang)) {
        response.cookie('lang', params.lang, { path: '/' })
        return response.status(200).send({ message: 'Locale changed succesfully' })
      } else {
        return response.status(404).send({ message: 'Locale not available' })
      }
    } catch (err) {
      return response.status(err.status).send({ error: 'Something went wrong while trying to switch locales', data: { message: err.message || 'Error message not found', name: err.name } })
    }
  }
}

module.exports = LocaleController
