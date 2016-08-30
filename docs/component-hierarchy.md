
**AuthformContainer**
  + AuthForm

**UserContainer**
  + Header nav


  + **MatchesContainer**
    + MatchesIndex
    + Filter: an array of Interest items
      * ProfileInterestForm (but styled differently)

  + MatchesIndex (appears in Browse and Likes)
    + MatchIndexItem (each match displayed in MatchesIndex, links to a profile)

  + **ProfileContainer**
    + **ProfileBasic** (from users table)
      - ProfileBasicForm (if currentUser)
        - **ProfileInterestForm** (sidebar)
          * ProfileInterestForm (if currentUser)
        - **ProfileAbout** (About tab)
          * ProfileAboutForm (if currentUser)
        - **ProfileAvailability** (Bonus: Availability tab)
          * ProfileAvailabilityForm (if currentUser)
        - **ProfileQuestionIndex** (Questions tab)
          * ProfileQuestionItem
            + ProfileQuestionForm (if currentUser)

  + **ConversationsContainer**
    + ConversationsIndex (all currentUser's conversations, displays under header)
      - ConversationIndexItem (preview a single conversation)
  
  + **MessageContainer**
      + MessagesIndex (single conversation -- a list of messages)
        - MessageIndexItem (one message)
      + NewMessageForm (add message to current chat)

  + **Bonus : LikesContainer**
    + MatchesIndex
    + Filter: by mutual liking




Routes


|Path   | Component   |
|-------|-------------|
|“/sign-up” | “AuthFormContainer"|
|“/sign-in” | “AuthFormContainer"|


|Path   | Component   |
|-------|-------------|
|“/” | “User" |
|“/matches” | “MatchesContainer" |
|“/matches/:username” | “MatchIndexItem" |
|“/:username” | “ProfileContainer"|
|“/:username/about"| “About"|
|“/:username/availability"| “Availability"|
|“/:username/questions"| “QuestionIndex"|
|“/:username/questions/:id"| “QuestionItem"|
|“/conversations”| “ConversationContainer"|
|“/conversation/:conversation_id”| “ConversationIndexItem"|
|“/conversation/:conversation_id/messages”| “MessageIndex"|
|“/conversation/:conversation_id/messages/:message_id”| “MessageIndexItem"|
|“/likes”| “LikesContainer"|
