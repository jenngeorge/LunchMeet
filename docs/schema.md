# Schema Information

## users

column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
photo_url       | string    |
zip_code        | integer   | not null
type            | string    | not null, only: [developer, recruiter, designer, business/operations, sales]
about           | text      |


## availability

column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | string    | not null, foreign key, indexed, unique
day             | string    | not null
start-time      | float     | not null
end-time        | float     | not null


## looking_for

column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | string    | not null, foreign key, indexed, unique
type            | string    | not null, only: [developers, recruiters, designers, business/operations, sales, all]


## interests

column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
interest        | string    | not null, only: [mentor, mentee, hiring, new opportunities, friendship, project collaboration]


## user_interests join table

column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
interest_id     | integer   | not null, foreign key, indexed, unique[user_id]
user_id         | integer   | not null, foreign key, indexed


## questions

column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
title           | text      | not null


## question_options

column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
question_id     | integer   | not null, foreign key, indexed
description     | text      | not null


## question_responses

column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, foreign key, indexed,
question_id     | integer   | not null, foreign key, indexed, unique[user_id]
answer          | integer   | not null, foreign key (from question_options), indexed
acceptable      | integer   | not null, foreign key (from question_options), indexed
importance      | integer   | not null
explanation     | text      |


## conversations

column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
sender_id       | integer   | not null, foreign key, indexed
receiver_id     | integer   | not null, foreign key, indexed


## messages

column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
conversation_id      | integer   | not null, foreign key, indexed
sender_id       | integer   | not null, foreign key, indexed
receiver_id     | integer   | not null, foreign key, indexed
content         | text      | not null
timestamp       | date      | not null


## likes

column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
liker_id        | integer   | not null, foreign key, indexed, unique[liked_user_id]
liked_id        | integer   | not null, foreign key, indexed, unique[liker_user_id]
