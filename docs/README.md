# LunchMeet

[Heroku link][heroku] not yet set up

[heroku]: https://lunch-meet-aa.herokuapp.com/

## Minimum Viable Product

LunchMeet is a web application inspired by OkCupid, built using Ruby on Rails and React/Redux. By the end of Week 9, this app will, at a minimum, satisfy the following criteria with smooth, bug-free navigation, adequate seed data and sufficient CSS styling:

- [X] Hosting on Heroku
- [ ] Production Readme
- [X] New account creation, sign_in, and guest/demo sign_in
- [ ] Browse and search other users by location and ‘looking for’
- [ ] Messaging
- [ ] Personality questions
- [ ] Match percentages based on question answers
- [ ] Bonus: likes
- [ ] Bonus:mark importance of questions and weight accordingly in % match
- [ ] Bonus: Availability


## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Redux Structure][redux-structure]
* [Sample State][sample-state]

[wireframes]: wireframes
[components]: component-hierarchy.md
[redux-structure]: redux-structure.md
[sample-state]: sample-state.md
[api-endpoints]: api-endpoints.md
[schema]: schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication

- [X] New Rails project
- [X] `User` model/migration
- [X] Back end authentication (session/password)
- [X] `StaticPages` controller and root view
- [X] Webpack & react/redux modules
- [X] `APIUtil` to interact with the API
- [X] Redux cycle for frontend authentication
- [X] User signup/signin components
- [X] Blank landing component after signup/signin
- [X] Style signup/signin components
- [X] Seed users
- [ ] Review phase 1

### Phase 2: Basic Profile Model, API, and components (1 days)

**Objective:** Basic Profiles can be read and edited through
the API.

- [ ] Seed database with a small amount of test data
- [X] CRUD API for profiles (`ProfilesController`)
- [X] JBuilder views for Basic Profile
- [ ] redux loop
- [X] Basic Profile Components
- [ ] Style Basic Profile components
- [ ] Seed Basic Profile information

### Phase 3: Matching (1.5 day)

**Objective:** User can browse matches based on location, looking-for, and interests

- [ ] `MatchesIndex` components and respective redux loops
+ [ ] `MatchesIndexItem`  
- [ ] Seed database with a small amount of test data
- [ ] JBuilder views for browse page and MatchesIndexItems
- [ ] `MatchesIndexItems` direct user to match profiles
- [ ] `MatchesIndex` filter
+ [ ] style the form
+ [ ] redux loop
- [ ] Seed more users for matches

### Phase 4: Interests Model, API, and components (1 half day)

**Objective:** Interests can be read and edited through
the API.
- [ ] `Interests` model
- [ ] Seed database with a small amount of test data
- [ ] CRUD API for profiles (`InterestsController`)
- [ ] JBuilder views for Interests
- [ ] update ProfilesComponents
- [ ] Style Interests component
- [ ] Seed Interests information



### Phase 5: Questions (2 day)
- [ ] `Questions` model
- [ ] `QuestionResponses` model
- [ ] `QuestionOptions` model
- [ ] `Questions` controller
- [ ] `QuestionResponses` controller
- [ ] `QuestionOptions` controller
- [ ] Seed database with a small amount of test data
- [ ] JBuilder views for Questions
- [ ] Question components and redux loops
- [ ] QuestionResponses components and redux loops
- [ ] Style Question / QuestionResponses components
- [ ] Seed Questions information
- [ ] Get match percentage between users based on question responses
- [ ] ReStyle `MatchesIndexItem` and `Profile` to include match %


### Phase 6: Messages (2 days)
- [ ] `Conversations` model
- [ ] `Messages` model
- [ ] CRUD API: `Messages` controller
- [ ] `Conversations` controller
- [ ] JBuilder views for `ConversationsIndex`
- [ ] JBuilder views for `ConversationsIndexItem`
- [ ] JBuilder views for `Message`

### Phase 7: Advanced Styling, Refactoring, Flex Period (1 day)

### Bonus Features (TBD)
- [ ] Likes
- [ ] Availability
