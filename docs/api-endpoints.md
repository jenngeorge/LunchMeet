# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users/:id` - update user profile info
- `GET /api/users/:id` - get a specific user
- `GET /api/users/new` - new user
- `GET /api/users` - used for MatchesIndex

### Session

- `POST /api/session`
- `DELETE /api/session`
- `GET /api/session/new` - login user


### Conversations

-  `GET /api/users/:user_id/conversations`
-  `POST /api/users/:user_id/conversations`
-  `GET /api/users/:user_id/conversations/:conversation_id/messages` -get a specific conversation's messages

### Questions and Responses

- `GET /api/questions`
- `GET /api/questions/:id` - one unanswered question
- `GET /api/users/:user_id/question_responses`
- `POST /api/users/:user_id/question_responses`
- `PATCH /api/users/:user_id/questions_responses`
- `DELETE /api/users/:user_id/questions_responses/:id`


### Bonus: Likes
- `GET /api/users/:user_id/likes`
- `POST /api/users/:user_id/likes`
- `DELETE /api/users/:user_id/likes/:like_id`
