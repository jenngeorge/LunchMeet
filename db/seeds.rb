# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


#initial user test data
adaLovelace = User.create(
username: "AdaLovelace",
password: "password",
email: "ada@ada.com",
photo_url: "https://res.cloudinary.com/jenngeorge/image/upload/v1472956127/aalunchmeet/gf40gxudkleshhizfbrf.jpg",
zip_code: "94133",
role: "developer",
about: "Computers are the best",
looking_for: "developer",
mentor: 5,
hiring: 10,
friendship: 0,
collaboration: 0
)

ogTesla = User.create(
  username: "OG_Tesla",
  password: "password",
  email: "og@tesla.com",
  photo_url: "https://res.cloudinary.com/jenngeorge/image/upload/v1472956347/aalunchmeet/mhf8vbkkj3iwyiy7ffii.jpg",
  zip_code: "94133",
  role: "developer",
  about: "making stuff",
  looking_for: "developer",
  mentor: 5,
  hiring: 10,
  friendship: 10,
  collaboration: 0
)

donNorman = User.create(
  username: "DonNorman",
  password: "password",
  email: "don@norman.com",
  photo_url: "https://res.cloudinary.com/jenngeorge/image/upload/v1472956480/aalunchmeet/tthytkopww7vkjmvft5s.jpg",
  zip_code: "94102",
  role: "designer",
  about: "design === life",
  looking_for: "designer",
  mentor: 5,
  hiring: 5,
  friendship: 0,
  collaboration: 0
)

billGates = User.create(
  username: "BillGates",
  password: "password",
  email: "bill@bill.com",
  photo_url: "https://res.cloudinary.com/jenngeorge/image/upload/v1472956562/aalunchmeet/lmgpjpotoaqsfplzbqv3.jpg",
  zip_code: "94102",
  role: "business",
  about: "working hard is good",
  looking_for: "developer",
  mentor: 5,
  hiring: 5,
  friendship: 10,
  collaboration: 0
  )

steveJobs = User.create(
  username: "SteveJobs",
  password: "password",
  email: "steve@steve.com",
  photo_url: "https://res.cloudinary.com/jenngeorge/image/upload/v1472956770/aalunchmeet/o1ivkvpqbtgasnse1zfl.jpg",
  zip_code: "94105",
  role: "designer",
  about: "I am pretty great.",
  looking_for: "developer",
  mentor: 10,
  hiring: 10,
  friendship: 10,
  collaboration: 0
  )

elonMusk = User.create(
  username: "ElonMusk",
  password: "password",
  email: "elon@elon.com",
  photo_url: "https://res.cloudinary.com/jenngeorge/image/upload/v1472956701/aalunchmeet/z1uy7krk0e9fhnhxh6d3.jpg",
  zip_code: "94121",
  role: "business",
  about: "lez go to marz",
  looking_for: "developer",
  mentor: 5,
  hiring: 10,
  friendship: 0,
  collaboration: 0
)

marissaMayer = User.create(
  username: "MarissaMayer",
  password: "password",
  email: "m@m.com",
  photo_url: "https://res.cloudinary.com/jenngeorge/image/upload/v1472956822/aalunchmeet/tdlpemiubvcyonr7xwwe.jpg",
  zip_code: "94123",
  role: "business",
  about: "on vacation ",
  looking_for: "recruiter",
  mentor: 5,
  hiring: -5,
  friendship: 0,
  collaboration: 0
)

elizabethHolmes = User.create(
  username: "ElizabethHolmes",
  password: "password",
  email: "e@e.com",
  photo_url: "https://res.cloudinary.com/jenngeorge/image/upload/v1472956937/aalunchmeet/lcegm0n1whi6fgbv4vx1.jpg",
  zip_code: "94134",
  role: "business",
  about: "everything is fine I'm doing awesome ",
  looking_for: "recruiter",
  mentor: -5,
  hiring: -5,
  friendship: 0,
  collaboration: 10
)

davidOgilvy = User.create(
  username: "DavidOgilvy",
  password: "password",
  email: "do@do.com",
  photo_url: "",
  zip_code: "10036",
  role: "sales",
  about: "Advertising exec, enjoys cooking",
  looking_for: "recruiter",
  mentor: 5,
  hiring: 5,
  friendship: 10,
  collaboration: 0
)

maryKay = User.create(
  username: "MaryKay",
  password: "password",
  email: "mk@mk.com",
  photo_url: "",
  zip_code: "52631",
  role: "sales",
  about: "Contact me to get started selling makeup",
  looking_for: "business",
  mentor: 5,
  hiring: 5,
  friendship: 10,
  collaboration: 0
)

daleCarnegie = User.create(
  username: "DaleCarnegie",
  password: "password",
  email: "dc@dc.com",
  photo_url: "",
  zip_code: "10019",
  role: "sales",
  about: "I teach sales  ",
  looking_for: "business",
  mentor: 5,
  hiring: 5,
  friendship: 10,
  collaboration: 0
)

peterGregory = User.create(
  username: "PeterGregory",
  password: "password",
  email: "pg@pg.com",
  photo_url: "",
  zip_code: "94040",
  role: "business",
  about: "I appreciate the details of life",
  looking_for: "developer",
  mentor: -5,
  hiring: 5,
  friendship: 10,
  collaboration: 0
)


#questions

q1 = Question.create(
  title: "Tabs or spaces?"
)

q1o1 = QuestionOption.create(
  question_id: 1,
  description: "tabs"
)

q1o2 = QuestionOption.create(
  question_id: 1,
  description: "spaces"
)

q1o3 = QuestionOption.create(
  question_id: 1,
  description: "what?"
)

q1o4 = QuestionOption.create(
  question_id: 1,
  description: "either"
)

##

q2 = Question.create(
  title: "I would like to see more diversity in tech"
)

q1o1 = QuestionOption.create(
  question_id: 2,
  description: "Absolutely agree"
)

q2o2 = QuestionOption.create(
  question_id: 2,
  description: "I don't care about diversity in tech."
)

q2o3 = QuestionOption.create(
  question_id: 2,
  description: "No, there's too much diversity already."
)

##

q3 = Question.create(
  title: "I believe entreneurship is an innate skill"
)

q3o1 = QuestionOption.create(
  question_id: 3,
  description: "True"
)

q3o2 = QuestionOption.create(
  question_id: 3,
  description: "False"
)

q3o3 = QuestionOption.create(
  question_id: 3,
  description: "Undecided"
)

##
q4 = Question.create(  title: "Everyone in tech should learn how to code"
)

q4o1 = QuestionOption.create(
  question_id: 4,
  description: "True"
)

q4o2 = QuestionOption.create(
  question_id: 4,
  description: "False"
)

q4o3 = QuestionOption.create(
  question_id: 4,
  description: "Undecided"
)

### Question responses

u1q2 = QuestionResponse.create(
  user_id: 1,
  question_option_id: 5,
  acceptable: 1,
  importance: 5,
  explanation: "That would be nice."
)

u1q3 = QuestionResponse.create(
  user_id: 1,
  question_option_id: 10,
  acceptable: 10,
  importance: 0
)

u1q4 = QuestionResponse.create(
  user_id: 2,
  question_option_id: 9,
  acceptable: 9,
  importance: 0
)

u1q2 = QuestionResponse.create(
  user_id: 2,
  question_option_id: 5,
  acceptable: 1,
  importance: 5,
  explanation: ""
)

### Conversations

c1 = Conversation.create(user_id: 1, other_user_id: 7)
c1m1 = Message.create(
  conversation_id: 1,
  receiver_id: 1,
  sender_id: 7,
  content: "u r inspiration")
c1m2 = Message.create(
  conversation_id: 1,
  receiver_id: 7,
  sender_id: 1,
  content: "thx girl (:"
)
c1m3 = Message.create(
  conversation_id: 1,
  receiver_id: 7,
  sender_id: 1,
  content: "and congrats on yahoo $$$"
)
c1m4 = Message.create(
  conversation_id: 1,
  receiver_id: 1,
  sender_id: 7,
  content: "omg thx so stressful"
)
c1m5 = Message.create(
  conversation_id: 1,
  receiver_id: 7,
  sender_id: 1,
  content: "u did it tho proud of u"
)
