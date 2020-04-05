'use strict'

const Route = use('Route')

Route.get('/', ({ antl }) => {
  return antl.formatMessage('greetings.greet')
})

/* Switching locales by cookie */
Route.get('/switch/:lang', 'LocaleController.update')

Route.post('users', 'UserController.store').validator('User/Create.js')
Route.post('sessions', 'SessionController.store').validator('Session/Create.js')
Route.get('invites/:id', 'InviteController.show')

Route.group(() => {
  Route.resource('users', 'UserController').apiOnly().except('store').validator(new Map([
    ['users.update', 'User/Update.js']
  ]))

  Route.resource('notifications', 'NotificationController').apiOnly().validator(new Map([
    ['notifications.store', 'Notifications/Create.js'],
    ['notifications.update', 'Notifications/Update.js']
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

  Route.put('/invites/:id', 'InviteController.update').validator('Invite/Update.js')
}).middleware(['auth'])

Route.group(() => {
  Route.resource('invites', 'InviteController').apiOnly().except(['get', 'put']).validator(new Map(
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

  Route.get('members', 'MemberController.index')
  Route.put('members/:id', 'MemberController.update').validator('Member/Update.js').middleware(['is:(moderator||administrator)'])

  Route.get('permissions/:id', 'PermissionController.show')
}).middleware(['auth', 'team'])
