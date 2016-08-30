# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


#initial user test data
user1 = User.create!(
  username: "me",
  password: "password",
  email: "me@me.com",
  photo_url: "face.jpg",
  zip_code: "999999",
  role: "developer",
  about: "Im a person",
  looking_for: "developer")

  user2 = User.create!(
    username: "me1",
    password: "password",
    email: "me1@me.com",
    photo_url: "face1.jpg",
    zip_code: "999991",
    role: "developer",
    about: "Im another person",
    looking_for: "developer")
