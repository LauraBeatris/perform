'use strict'

const Route = use('Route')

Route.get('/', ({ antl }) => {
  return antl.formatMessage('greetings.greet')
})

/* Switching locales by cookie */
Route.get('/switch/:lang', 'LocaleController.update')

Route.post('users', 'UserController.store').validator('User/Create.js')
Route.post('sessions', 'SessionController.store').validator('Session/Create.js')

Route.group(() => {
  Route.resource('users', 'UserController').apiOnly().except('store').validator(new Map([
    ['users.update', 'User/Update.js']
  ]))

  Route.resource('teams', 'TeamController').apiOnly().validator(new Map(
    [
      [
        ['teams.store'],
        ['Team/Create.js']
      ],
      [
        ['teams.update'],
        ['Team/Update.js']
      ]
    ]
  ))

  Route.get('roles', 'RoleController.index')
}).middleware(['auth'])

Route.group(() => {
  Route.resource('invites', 'InviteController').apiOnly().validator(new Map(
    [
      ['invites.store', 'Invite/Create.js'],
      ['invites.update', 'Invite/Update.js']
    ]
  )).middleware(new Map(
    [
      [
        ['invites.store', 'invites.update'],
        ['can:create_invite']
      ]
    ]
  ))

  Route.resource('projects', 'ProjectController').apiOnly().validator(new Map(
    [
      ['projects.store', 'Project/Create.js'],
      ['projects.update', 'Project/Update.js']
    ]
  ))

  Route.get('members', 'MemberController.index').middleware(['is:moderator,administrator'])
  Route.put('members/:id', 'MemberController.update').validator('Member/Update.js').middleware(['is:moderator'])

  Route.get('permissions/:id', 'PermissionController.show')

  Route.resource('projects.tasks', 'TaskController').apiOnly().validator(new Map(
    [
      ['projects.tasks.store', 'Task/Create.js'],
      ['projects.tasks.update', 'Task/Update.js']
    ]
  ))
}).middleware(['auth', 'team'])
