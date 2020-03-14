'use strict'

class TaskController {
  async index ({ params, request, response }) {
    try {
      const { page = 1 } = request.get()
      const project = await request.team
        .projects()
        .where('id', params.projects_id)
        .first()
      const tasks = await project.tasks()
        .with('project')
        .with('user')
        .paginate(page, 10)

      return tasks
    } catch (err) {
      return response.status(err.status || 500).send(
        {
          error: {
            message: 'Something went wrong while listing a task',
            data: { name: err.name, message: err.message }
          }
        })
    }
  }

  async store ({ params, request, response }) {
    const data = request.only(['user_id', 'name', 'description'])

    try {
      const project = await request.team
        .projects()
        .where('id', params.projects_id)
        .first()

      const { projects_id } = params
      const task = await project.tasks().create({ ...data, project_id: parseInt(projects_id) })
      await task.load('project')
      return task
    } catch (err) {
      return response.status(err.status || 500).send(
        {
          error: {
            message: 'Something went wrong while creating a task',
            data: { name: err.name, message: err.message }
          }
        })
    }
  }

  async show ({ params, request, response }) {
    try {
      const project = await request.team.projects()
        .where('id', params.projects_id).first()
      const task = await project.tasks().where('id', params.id).first()

      if (!task) {
        return response.status(404).send(
          {
            error: {
              message: 'Task not found. Did you passed a valid id?'
            }
          })
      }

      return task
    } catch (err) {
      return response.status(err.status || 500).send(
        {
          error: {
            message: 'Something went wrong while showing a task',
            data: { name: err.name, message: err.message }
          }
        })
    }
  }

  async update ({ params, request, response }) {
    try {
      const data = request.only(['user_id', 'name', 'description'])
      const project = await request.team.projects()
        .where('id', params.projects_id).first()
      const task = await project.tasks().where('id', params.id).first()

      if (!task) {
        return response.status(404).send(
          {
            error: {
              message: 'Task not found. Did you passed a valid id?'
            }
          })
      }

      task.merge(data)
      await task.loadMany(['project', 'user'])
      await task.save()
      return task
    } catch (err) {
      return response.status(err.status || 500).send(
        {
          error: {
            message: 'Something went wrong while updating a task',
            data: { name: err.name, message: err.message }
          }
        })
    }
  }

  async destroy ({ params, request, response }) {
    try {
      const project = await request.team.projects().where('id', params.projects_id).first()
      const task = await project.tasks().where('id', params.id).first()

      if (!task) {
        return response.status(404).send(
          {
            error: {
              message: 'Task not found. Did you passed a valid id?'
            }
          })
      }

      await task.delete()

      return response.status(200).send({ success: { message: `The task - ${task.name} - was succesfully deleted ` } })
    } catch (err) {
      return response.status(err.status || 500).send(
        {
          error: {
            message: 'Something went wrong while deleting a task',
            data: { name: err.name, message: err.message }
          }
        })
    }
  }
}

module.exports = TaskController
