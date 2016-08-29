## example state

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
  open_messages: {
    1: {
      sender_id: 1,
      receiver_id: 2,
      content: "Coding is fun",
      timestamp: 2038-01-19 03:12:05
    },
    2: {
      sender_id: 1,
      receiver_id: 2,
      content: "Yes I agree"
      timestamp: 2038-01-19 03:14:07
    }
  },
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
