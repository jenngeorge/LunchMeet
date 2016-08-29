# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users` - update user profile info
- `GET /api/users/:user_id` - get a specific user
- `GET /api/users/new` - new user
- `GET /api/users` - used for MatchesIndex

### Session

- `POST /api/session`
- `DELETE /api/session`
- `GET /api/session/new` - login user

### Conversations

-  `GET /api/conversations`
-  `POST /api/conversations`
-  `GET /api/conversations/:conversation_id/messages` -get a specific conversation's messages

### Questions and Responses

- `GET /api/questions`
- `GET /api/question_responses`
- `POST /api/question_responses`
- `PATCH /api/questions_responses`
- `DELETE /api/questions_responses/:id`


### Bonus: Likes
- `GET /api/likes`
- `POST /api/likes`
- `DELETE /api/likes/:like_id`
