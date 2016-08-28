
*_AuthformContainer_
  -AuthForm

*_UserContainer_ (Header nav)


  *_MatchesContainer_ (Browse)
       -MatchesIndex
       -Filter: an array of ProfileLookingFor items
            -ProfileLookingForm (but styled differently)

  *MatchesIndex (appears in Browse and Likes)
       -MatchIndexItem (each match displayed in MatchesIndex, links to a profile)

  *_ProfileContainer_
       -_ProfileBasic_ (location, "I’m a “, photo )
            -ProfileBasicForm (if currentUser)
         -_ProfileLookingFor_ (sidebar)
              -ProfileLookingForm (if currentUser)
         -_ProfileAbout_ (About tab)
              -ProfileAboutForm (if currentUser)
         -_ProfileAvailability_ (Availability tab)
              -ProfileAvailabilityForm (if currentUser)
         -_ProfileQuestions_ (Questions tab)
              -ProfileQuestionItem
                   -ProfileQuestionForm (if currentUser)

  *_MessagesContainer_ (displays under header)
       -MessagesIndex (all messages to currentUser)
            -MessageIndexItem
       -MessageDetail (display chat on bottom left of screen)
            -NewMessageForm (add message to current chat)

  *_LikesContainer_ (Bonus)
       -MatchesIndex
       -Filter: by mutual liking




Routes

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
