'use strict'

const User = use('App/Models/User')
const UserService = use('App/Services/Users')

class UserController {
  async index ({ response }) {
    try {
      const users = await User.all()

      return users
    } catch (err) {
      return response.status(err.status || 500).send(
        {
          error: {
            message: 'Something went wrong while trying to list users',
            data: { name: err.name, message: err.message }
          }
        })
    }
  }

  async store ({ request, response }) {
    const data = request.only(['name', 'email', 'password'])
    try {
      const user = await User.create(data)
      return user
    } catch (err) {
      return response.status(err.status || 500).send(
        {
          error: {
            message: 'Something went wrong while create a user',
            data: { name: err.name, message: err.message }
          }
        })
    }
  }

  async show ({ params, response }) {
    const { id } = params

    try {
      const user = await User.findOrFail(id)

      return user
    } catch (err) {
      return response.status(err.status || 500).send(
        {
          error: {
            message: 'Something went wrong while show a user',
            data: { name: err.name, message: err.message }
          }
        })
    }
  }

  async update ({ params, request, response }) {
    const { id } = params
    const data = request.only(['name', 'email'])

    try {
      const user = await User.findOrFail(id)
      user.merge(data)
      await user.save()

      return user
    } catch (err) {
      return response.status(err.status || 500).send(
        {
          error: {
            message: 'Something went wrong while update a user',
            data: { name: err.name, message: err.message }
          }
        })
    }
  }

  async destroy ({ params, response }) {
    const { id } = params

    try {
      const user = await User.findOrFail(id)
      await user.delete()

      return response.status(200).send({
        sucess: { message: `The user - ${user.name} - was deleted succesfully` }
      })
    } catch (err) {
      return response.status(err.status || 500).send(
        {
          error: {
            message: 'Something went wrong while delete a user',
            data: { name: err.name, message: err.message }
          }
        })
    }
  }
}

module.exports = UserController
