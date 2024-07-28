/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

router.on('/').render('pages/home')

router.get('/foo', async ({ auth }) => {
  // here the signature of the load method is of type _any_
  await auth.user?.load('post')
  // this gives type error (Argument of type '"post"' is not assignable to parameter of type 'undefined'.ts(2345))
  await auth.user?.related('post').query().first()
  return null
})