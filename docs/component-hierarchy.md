
**AuthformContainer**
  + AuthForm

**UserContainer** 
  + Header nav


  + **MatchesContainer** 
    + MatchesIndex
    + Filter: an array of ProfileLookingFor items
      * ProfileLookingForm (but styled differently)

  + MatchesIndex (appears in Browse and Likes)
    + MatchIndexItem (each match displayed in MatchesIndex, links to a profile)

  + **ProfileContainer**
    + **ProfileBasic** (location, "I’m a “, photo )
      - ProfileBasicForm (if currentUser)
        - **ProfileLookingFor** (sidebar)
          * ProfileLookingForm (if currentUser)
        - **ProfileAbout** (About tab)
          * ProfileAboutForm (if currentUser)
        - **ProfileAvailability** (Availability tab)
          * ProfileAvailabilityForm (if currentUser)
        - **ProfileQuestions** (Questions tab)
          * ProfileQuestionItem
            + ProfileQuestionForm (if currentUser)

  + **MessagesContainer** 
    + MessagesIndex (all messages to currentUser, displays under header)
      - MessageIndexItem
    + MessageDetail (display chat on bottom left of screen)
      - NewMessageForm (add message to current chat)

  + **Bonus : LikesContainer** 
    + MatchesIndex
    + Filter: by mutual liking




Routes

|Path   | Component   |
|-------|-------------|
|“/sign-up” | “AuthFormContainer"|
|“/sign-in” | “AuthFormContainer"|
|“/matches” | “MatchesContainer" |
|“/matches/:username” | “ProfileContainer"|
|“/matches/:username/about"| “ProfileContainer"|
|“/matches/:username/questions"| “ProfileContainer"|
|“/matches/:username/availability"| “ProfileContainer"|
|“/user”| “ProfileContainer"|
|“/user/about"| “ProfileContainer"|
|“/user/questions"| “ProfileContainer"|
|“/user/availability"| “ProfileContainer"|
|“/user/messages”| “MessageContainer"|
|“/user/messages/:username”| “MessageContainer"|
|“/user/likes”| “LikesContainer"|
