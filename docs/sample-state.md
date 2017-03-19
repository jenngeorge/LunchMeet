## example state
```json
{
  session: {
    currentUser:{}
  },
  errors: [],
  users: {
    byId: {
      1: {
        photo_url: "photo.url",
        username: "userName",
        neighborhood: "SOMA"
      },
      2: {
        photo_url: "photo.url",
        username: "userName1",
        neighborhood: "FiDi"
      }
    },
    allIds: [1, 2]
  }

  userDetail: {
    id: 1,
    about: "description",
    collaboration: "something",
    friendship: "something",
    hiring: "something",
    location: {
      lat: "lat",
      long: "long",
      zip: "94110",
      neighborhood: "Mission"
    },
    questionOptions: {
      byId: {
        1: {
          title: "do you like tech?"
        },
      }
      allIds: [1]
    },
    questionResponses: {
      byId: {

      }
    }
  },

  unansweredQuestions:{
    byId: {
      1: {
        title: "a question",
        question_options: [1, 2, 3]
      }
    },
    allIds: [1]
  },
  question_options: {
    byId: {
      1: {
        description: "tabs"
      },
      2: {
        description: "spaces"
      },
      3: {
        description: "neither"
      }
    },
    allIds: [1, 2, 3]
  }

  conversations: {
    byId: {
      1: {
        other_user: {
          id: 2,
          username: "userName"
        },
      message_ids: [1, 2]
      }
    },
    allIds: [1]
  }
  messages: {
    byId: {
      1: {
        content: "hi",
        created_at: "2016-09-09T02:36:43.716Z",
        receiver_id: 1,
        sender_id: 2
      },
      2: {
        content: "hi",
        created_at: "2016-09-09T02:36:43.716Z",
        receiver_id: 1,
        sender_id: 2
      },
      3: {
        content: "hi",
        created_at: "2016-09-09T02:36:43.716Z",
        receiver_id: 1,
        sender_id: 2
      }
    },
    allIds: [1, 2, 3]
  },
}
```
