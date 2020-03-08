'use strict'

const Mail = use('Mail')

class MailJob {
  static get concurrency () {
    return 1
  }

  static get key () {
    return 'Mail-job'
  }

  async handle ({ templates, data, subject }) {
    try {
      Mail.send(templates, data, (message) => {
        const { email, user } = data
        message.to(email).from(user.email, user.name).subject(subject)
      })
    } catch (err) {
      console.log(err)
    }
  }
}

module.exports = MailJob
