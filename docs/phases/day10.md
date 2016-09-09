##Day 10 notes

### Stuff I did
+ new message button on profile
  - sends currentUser to conversation if one exists between them
  and whoever's profile they are on
  - clicking a conversation in conversation index send currentuser
  to that conversation's message index
  - a message form in messageindex sends messages
    + after send clicked, shows message in messageindex and clears textarea
  - fixed double search bug on first browse (had to preventDefault to avoid confusing Chrome)
+ render questions to profile form on at a time
+ style messages
+ style message button
+ style conversations
+ fix looking to meet All within Any


###notes
+ Things left to do:
  - seed more questions
  - match % based on questions
  - seed more things
  - fix cloudinary picture displays
  - keep heroku awake
  -

matching:

start at 50% (neutral)
-10% if not looking for that CU's role
+10% if looking for CU's role

each question they've both answered:
  +q% if user's option === CU's accepted
  -q% if user's option !== CU's accepted

  importance: |user option amt| + |importance amt|

importance: 1, 2, 3

questions both have responded to = N
questions are 40% of total (means f(N) <= 40)


shared interests -- later
