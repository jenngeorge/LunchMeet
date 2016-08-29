## Auth Cycles

### Session API Request Actions

* `signUp`
  0. invoked from `SignupForm` `onSubmit`
  0. `POST /api/users` is called.
  0. `receiveCurrentUser` is set as the success callback.
* `logIn`
  0. invoked from `Navbar` `onSubmit`
  0. `POST /api/session` is called.
  0. `receiveCurrentUser` is set as the callback.
* `logOut`
  0. invoked from `Navbar` `onClick`
  0. `DELETE /api/session` is called.
  0. `removeCurrentUser` is set as the success callback.
* `fetchCurrentUser`
  0. invoked from `App` in `didMount`
  0. `GET /api/session` is called.
  0. `receiveCurrentUser` is set as the success callback.

### Session API Response Actions

* `receiveCurrentUser`
  0. invoked from an API callback
  0. the `SessionReducer` stores `currentUser` in the application's state.
* `removeCurrentUser`
  0. invoked from an API callback
  0. the `SessionReducer` removes `currentUser` from the application's state.

## Error Cycles

### Error API Response Actions
* `setErrors`
  0. invoked from API callbacks on error for actions that generate POST requests
  0. the `ErrorReducer` stores the `form` in the application's state; `errors` are mapped to their respective forms
* `removeErrors`
  0. invoked from API callbacks on success for actions that generate POST requests
  0. the `ErrorReducer` removes `errors` for a given `form` in the application's state.

## User Cycles

### Users API Request Actions
* `fetchAllUsers`
  0. invoked from `MatchesIndex` `didMount`/ `willReceiveProps`
  0. `GET /api/users` is called.
  0. `receiveAllUsers` is set as the success callback

* `fetchSingleUser`
  0. invoked from `Profile` `didMount / willReceiveProps`
  0. `GET /api/users/:id` is called
  0. `receiveSingleUser` is set as the success callback

* `updateUser`
  0. invoked from `ProfileBasicForm` `onSubmit`
  0. `PATCH /api/users/:id` is called
  0. `receiveSingleUser` is set as the success callback


### Users API Response Actions
* `receiveAllUsers`
  0. invoked from an API callback
  0. the `MatchReducer` updates `matches` in the application's state

* `receiveSingeleUser`
  0. invoked from an API callback
  0. the `ProfileReducer` updates `current_profile` in the application's state
