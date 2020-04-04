'use strict'

const Notification = use('App/Models/Notification')

class NotificationController {
  async index ({ request, response }) {
    try {
      const { page } = request.get()
      const notifications = await Notification.query().with('user').with('author').orderBy('created_at', 'desc').paginate(page, 4)
      return notifications
    } catch (err) {
      return response.status(err.status || 500).send(
        {
          error: {
            message: 'Something went wrong while listing notifications',
            data: { name: err.name, message: err.message }
          }
        })
    }
  }

  async store ({ request, response }) {
    try {
      const data = request.only(['title', 'description', 'invite_id'])
      const notification = await Notification.create(data)

      return notification
    } catch (err) {
      return response.status(err.status || 500).send(
        {
          error: {
            message: 'Something went wrong while creating a notification',
            data: { name: err.name, message: err.message }
          }
        })
    }
  }

  async show ({ params, response }) {
    try {
      const notification = await Notification.findOrFail(params.id)
      await notification.load('invite')

      return notification
    } catch (err) {
      return response.status(err.status || 500).send(
        {
          error: {
            message: 'Something went wrong while showing the notification',
            data: { name: err.name, message: err.message }
          }
        })
    }
  }

  async update ({ params, request, response }) {
    try {
      const data = request.only(['title', 'description', 'invite_id', 'viewed'])
      const notification = await Notification.findOrFail(params.id)

      notification.merge(data)
      await notification.save()

      return notification
    } catch (err) {
      return response.status(err.status || 500).send(
        {
          error: {
            message: 'Something went wrong while updating a notification',
            data: { name: err.name, message: err.message }
          }
        })
    }
  }

  async destroy ({ params, request, response }) {
    try {
      const notification = await Notification.findOrFail(params.id)
      await notification.delete()
    } catch (err) {
      return response.status(err.status || 500).send(
        {
          error: {
            message: 'Something went wrong while deleting a notification',
            data: { name: err.name, message: err.message }
          }
        })
    }
  }
}

module.exports = NotificationController
