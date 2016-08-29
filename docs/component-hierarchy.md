
**AuthformContainer**
  + AuthForm

**UserContainer**
  + Header nav


  + **MatchesContainer**
    + MatchesIndex
    + Filter: an array of Interest items
      * ProfileLookingForm (but styled differently)

  + MatchesIndex (appears in Browse and Likes)
    + MatchIndexItem (each match displayed in MatchesIndex, links to a profile)

  + **ProfileContainer**
    + **ProfileBasic** (from users table)
      - ProfileBasicForm (if currentUser)
        - **ProfileLookingFor** (sidebar)
          * ProfileLookingForm (if currentUser)
        - **ProfileAbout** (About tab)
          * ProfileAboutForm (if currentUser)
        - **ProfileAvailability** (Bonus: Availability tab)
          * ProfileAvailabilityForm (if currentUser)
        - **ProfileQuestions** (Questions tab)
          * ProfileQuestionItem
            + ProfileQuestionForm (if currentUser)

  + **ConversationsContainer**
    + ConversationsIndex (all currentUser's conversations, displays under header)
      - ConversationIndexItem
        + Message
        + NewMessageForm (add message to current chat)

  + **Bonus : LikesContainer**
    + MatchesIndex
    + Filter: by mutual liking




Routes

* user/ is the current user

|Path   | Component   |
|-------|-------------|
|“/sign-up” | “AuthFormContainer"|
|“/sign-in” | “AuthFormContainer"|
|“/matches” | “MatchesContainer" |
|“/users/:username” | “ProfileContainer"|
|“/users/:username/about"| “ProfileContainer"|
|“/users/:username/questions"| “ProfileContainer"|
|“/users/:username/availability"| “ProfileContainer"|
|“/user”| “ProfileContainer"|
|“/user/about"| “ProfileContainer"|
|“/user/questions"| “ProfileContainer"|
|“/user/availability"| “ProfileContainer"|
|“/user/conversations”| “ConversationContainer"|
|“/user/conversation/:conversation_id/messages”| “ConversationContainer"|
|“/user/likes”| “LikesContainer"|
