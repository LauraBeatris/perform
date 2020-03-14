'use strict'

class Locale {
  async handle ({ request, antl }, next) {
    const lang = request.cookie('lang')

    if (lang) {
      antl.switchLocale(lang)
    }

    await next()
  }
}

module.exports = Locale
