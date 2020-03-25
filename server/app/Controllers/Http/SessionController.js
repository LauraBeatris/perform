'use strict'
const User = use('App/Models/User')
class SessionController {
  async store ({ request, response, auth }) {
    const { email, password } = request.all()
    try {
      const { token, refreshToken } = await auth.attempt(email, password)
      const { id, name } = await User.findByOrFail('email', email)

      return { token, refreshToken, id, name }
    } catch (err) {
      return response.status(err.status || 500)
        .send({
          error:
          {
            message: 'Something went wrong while trying to attempt the authentication',
            error: {
              message: 'Are you sure that you sent a valid email and password?',
              data: err.message,
              name: err.name
            }
          }
        })
    }
  }
}

module.exports = SessionController
