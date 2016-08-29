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
  0. `GET /api/users/:user_id` is called
  0. `receiveSingleUser` is set as the success callback

* `updateUser`
  0. invoked from `ProfileBasicForm` `onSubmit`
  0. `POST api/users/:id` is called
  0. `receiveSingleUser` is set as the success callback


### Users API Response Actions
* `receiveAllUsers`
  0. invoked from an API callback
  0. the `MatchReducer` updates `matches` in the application's state

* `receiveSingleUser`
  0. invoked from an API callback
  0. the `ProfileReducer` updates `current_profile` in the application's state

## Conversation Cycles

### Conversations API Request Actions
* `fetchAllConversations`
  0. invoked from `User` `didMount / willReceiveProps`
  0. `GET /api/conversations` is called
  0. `receiveAllConversations` is set as the success callback

* `createConversation`
  0. invoked from new message button `onClick`
  0. `POST /api/conversations` is called.
  0. `receiveSingleConversation` is set as the success callback.

* `fetchSingleConversation`
  0. invoked from `Conversations` index `onClick`
  0. `GET /api/conversations/:conversation_id` is called
  0. `receiveSingleConversation` is set as the success callback`

### Conversations API Response Actions

* `receiveAllConversations`
  0. invoked from an API callback
  0. the `ConversationReducer` updates `Conversations` in the application's state.

* `receiveSingleConversation`
  0. invoked from an API callback
  0. the `ConversationReducer` updates `conversaion[id]` in the application's state.

## Question Cycles

### Question API Request Actions

* `fetchSingleQuestion`
  0. invoked from currentUser's profile question tab `onClick`
  0. `GET /api/questions/:question_id` is called
  0. `receiveSingleQuestion` is set as the success callback`

### Question API Receive Action

* `receiveSingleQuestion`
  0. invoked from an API callback
  0. the `QuestionReducer` updates `question` in the application's state.

## Question Response Cycles

### Question API Request Actions

* `fetchResponses`
  0. invoked from Profile question tab `onClick`
  0. `GET /api/question_responses` is called
  0. `receiveResponses` is set as the success callback`

* `createResponse`
  0. invoked from currentUser's ProfileQuestions tab on `onSubmit`
  0. `POST /api/question_responses` is called
  0. `receiveResponses` is set as the success callback`

* `updateResponse`
  0. invoked from currentUser's ProfileQuestions tab on `Update Answer` button
  0. `POST /api/question_responses/:id` is called
  0. `receiveResponses` is set as the success callback`

* `destroyResponse`
  0. invoked from currentUser's ProfileQuestions tab on `Delete Answer` button
  0. `DELETE /api/question_responses/:id` is called
  0. `removeResponses` is set as the success callback`

### Question API Receive Action

* `receiveResponses`
  0. invoked from an API callback
  0. the `ResponsesReducer` updates `questions[id]` in the application's state under `current_profile`

* `removeResponse`
  0. invoked from an API callback
  0. the `ResponsesReducer` removes `questions[id]` in the application's state under `current_profile`


## MatchFilter Cycles

* `fetchMatchFilters`
  0. invoked from `ProfileLookingForm` `onSubmit`
  0. `receiveMatchFilters` is set as the success callback.

* `receiveMatchFilters`
  0. invoked from an API callback.
  0. The `MatchesReducer` updates `filters` in the application's state.

## Likes Cycles

### Likes API Request Actions
* `fetchAllLikes`
  0. invoked from `Likes`
  0. `GET api/api/likes` is called
  0. `receiveAllLikes` is set as the success callback

* `createLike`
  0. invoked from `Profile` on `ToggleLikeButton` `onClick`
  0. `POST api/likes` is called
  0. `receiveAllLikes` is set as the success callback

* `destroyLike`
  0. invoked from `Profile` on `ToggleLikeButton` `onClick`
  0. `DELETE api/likes/:like_id` is called
  0. `receiveAllLikes` is set as the success callback

### Likes API Response Actions
* `receiveAllLikes`
  0. invoked from an API callback
  0. the `LikesReducer` updates `likes` in the application's state
