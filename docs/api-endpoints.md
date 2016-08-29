# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users` - update user profile info
- `GET /api/users/:id` - get a specific user
- `GET /api/users/new` - new user
- `GET /api/users` - used for MatchesIndex

### Session

- `POST /api/session`
- `DELETE /api/session`
- `GET /api/session/new` - login user

### Messages

-  `GET /api/messages`
-  `POST /api/messages`

### Questions

-  `GET /api/questions/:id`

### Answers

- `GET /api/answers`

### Bonus: Likes
- `GET /api/likes`
- `POST /api/likes`
- `DELETE /api/likes/:id`
