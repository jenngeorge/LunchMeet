## example state
```json
{
  currentUser: {
    id: 1,
    username: "JennGeorge"
  },
  forms: {
    signUp: {errors: []},
    signIn: {errors: []},
    answerQuestion: {errors: ["must select one option"]}
  },
  current_profile: {
    profile_info: {
      username: AnotherUser,
      photo_url: "pic.jpg",
      type: "Recruiter",
      location: "SOMA",
      about: "Hi I want to hire people."
    },
    availability: {
      "Monday": 1-2,
      "Wednesday": 12-1
    },
    looking_for: "developers",
    interests: ["mentee", "friendship"],
    questions: {
      1: {
        title: "Tabs or spaces?"
        answer: "Spaces",
        acceptable: "Spaces",
        importance: 2,
        explanation: ""
      }
    }
  },
  conversations: {
    1: {
      sender_id: 1,
      receiver_id: 2,
      messages: [
        1: {
        sender_id: 1,
        receiver_id: 2,
        content: "Coding is fun",
        timestamp: 2038-01-19 03:10:05
        },
        2: {
        sender_id: 2,
        receiver_id: 1,
        content: "I agree",
        timestamp: 2038-01-19 03:12:05
        },
      ]
    },
  },
  likes : {},
  matches: {
    1: {
      username: AnotherUser,
      photo_url: "pic.jpg",
      type: "Recruiter",
      location: "SOMA"
    },
    2: {
      username: GreatRecruiter,
      photo_url: "myface.jpg",
      type: "Recruiter",
      location: "SOMA"
    },
    3: {
      username: FirstnameLastname,
      photo_url: "so_professional.jpg",
      type: "Recruiter",
      location: "SOMA"
    }
  }

  filters: ["Mentee", "Friendship"]
}
```
