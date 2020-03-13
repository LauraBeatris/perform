'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

const Route = use('Route')

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
  Route.put('members/:id', 'MemberController.update').middleware(['is:moderator'])

  Route.get('permissions/:id', 'PermissionController.show')
}).middleware(['auth', 'team'])

