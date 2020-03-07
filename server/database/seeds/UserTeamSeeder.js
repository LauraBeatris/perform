'use strict'

const User = use('App/Models/User')

class UserTeamSeeder {
  async run () {
    // Creating the user instance
    const user = await User.create({
      name: 'Laura Beatris',
      email: 'laurabeatriserafim@gmail.com',
      password: '123456'
    })

    // Creating the team related to the user
    await user.teams().create({
      name: 'Primeiro Time',
      user_id: user.id
    })
  }
}

module.exports = UserTeamSeeder
