'use strict'

class Team {
  async handle ({ request, response, auth }, next) {
    const slug = request.header('TEAM')
    if (!slug) return response.status(401).send({ error: { message: 'Unauthorized - You need to provide a team slug' } })

    const team = await auth.user.teams().where('slug', slug).first()
    if (!team) return response.status(401).send({ error: { message: "Unauthorized - There's no existing team with the provided slug" } })

    auth.user.currentTeam = team
    request.team = team

    return next()
  }
}

module.exports = Team
