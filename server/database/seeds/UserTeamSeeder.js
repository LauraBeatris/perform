'use strict'

const User = use('App/Models/User')
const Role = use('Role')
const Permission = use('Permission')

class UserTeamSeeder {
  async run () {
    // Creating the user instance
    const user = await User.create({
      name: 'Laura Beatris',
      email: 'laurabeatriserafim@gmail.com',
      password: '123456'
    })

    // Creating the team related to the user
    const team = await user.teams().create({
      name: 'Primeiro Time',
      user_id: user.id
    })

    /*
      Acl Initial Setup
    */
    const createInvite = await Permission.create({
      slug: 'create_invite',
      name: 'Create invite',
      description: 'Permission to invite other users to the team'
    })

    const createProject = await Permission.create({
      slug: 'create_project',
      name: 'Create Project',
      description: 'Permission to create a project'
    })

    const deleteTeam = await Permission.create({
      slug: 'delete_team',
      name: 'Delete Team',
      description: 'Permission to delete a team'
    })

    const moderator = await Role.create({
      slug: 'moderator',
      name: 'Moderator'
    })

    const administrator = await Role.create({
      slug: 'administrator',
      name: 'Administrator'
    })

    await Role.create({
      slug: 'member',
      name: 'Member'
    })

    await moderator.permissions().attach([createInvite.id, createProject.id, deleteTeam.id])
    await administrator.permissions().attach([createProject.id])

    const teamMember = await user.teamJoins().where('team_id', team.id).first()
    await teamMember.roles().attach([moderator.id])
  }
}

module.exports = UserTeamSeeder
