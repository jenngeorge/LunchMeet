# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


#initial user test data
billGates = User.create!(
  username: "BillGates",
  password: "password",
  email: "bill@bill.com",
  photo_url: "face.jpg",
  zip_code: "999999",
  role: "business/operations",
  about: "working hard is good",
  looking_for: "developer")

steveJobs = User.create!(
  username: "SteveJobs",
  password: "password",
  email: "steve@steve.com",
  photo_url: "face1.jpg",
  zip_code: "999991",
  role: "designer",
  about: "I am pretty great.",
  looking_for: "developer")

elonMusk = User.create!(
  username: "ElonMusk",
  password: "password",
  email: "elon@elon.com",
  photo_url: "face.jpg",
  zip_code: "000000",
  role: "business/operations",
  about: "lez go to marz",
  looking_for: "developer"
)

marissaMayer = User.create(
  username: "MarissaMayer",
  password: "password",
  email: "m@m.com",
  photo_url: "face.jpg",
  zip_code: "000000",
  role: "business/operations",
  about: "looking for new opportunies ",
  looking_for: "recruiter"
)

elizabethHolmes = User.create(
  username: "eHolmes",
  password: "password",
  email: "e@e.com",
  photo_url: "face.jpg",
  zip_code: "000000",
  role: "business/operations",
  about: "everything is fine I'm doing awesome ",
  looking_for: "recruiter"
)

adaLovelace = User.create(
  username: "adaLovelace",
  password: "password",
  email: "ada@ada.com",
  photo_url: "face.jpg",
  zip_code: "000000",
  role: "developer",
  about: "Computers are the best",
  looking_for: "developer"
)
