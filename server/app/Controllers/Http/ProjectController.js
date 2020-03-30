'use strict'

class ProjectController {
  async index ({ request, response }) {
    const { page = 1 } = request.get()
    try {
      const projects = await request.team.projects().paginate(page, 10)
      return projects
    } catch (err) {
      return response.status(err.status || 500).send(
        {
          error: {
            message: 'Something went wrong while trying to list projects',
            data: { name: err.name, message: err.message }
          }
        })
    }
  }

  async store ({ request, response }) {
    const data = request.only(['title', 'description'])

    try {
      const project = await request.team.projects().create(data)
      return project
    } catch (err) {
      return response.status(err.status || 500).send(
        {
          error: {
            message: 'Something went wrong while trying to create a project',
            data: { name: err.name, message: err.message }
          }
        })
    }
  }

  async show ({ params, request, response }) {
    try {
      const project = await request.team.projects().where('id', params.id).first()
      return project
    } catch (err) {
      return response.status(err.status || 500).send(
        {
          error: {
            message: 'Something went wrong while trying to show a project',
            data: { name: err.name, message: err.message }
          }
        })
    }
  }

  async update ({ params, request, response }) {
    const data = request.only('title', 'description')
    try {
      const project = await request.team.projects().where('id', params.id).first()
      project.merge(data)
      await project.save()

      return project
    } catch (err) {
      return response.status(err.status || 500).send(
        {
          error: {
            message: 'Something went wrong while trying to update a project',
            data: { name: err.name, message: err.message }
          }
        })
    }
  }

  async destroy ({ params, request, response }) {
    try {
      const project = await request.team.projects().where('id', params.id).first()
      await project.delete()
      return response.status(200).send({
        success: {
          message: `The project ${project.title} was succesfully deleted`
        }
      })
    } catch (err) {
      return response.status(err.status || 500).send(
        {
          error: {
            message: 'Something went wrong while trying to delete a project',
            data: { name: err.name, message: err.message }
          }
        })
    }
  }
}

module.exports = ProjectController
