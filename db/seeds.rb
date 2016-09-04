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
looking_for: "developer"
)

ogTesla = User.create(
  username: "OG_Tesla",
  password: "password",
  email: "og@tesla.com",
  photo_url: "https://res.cloudinary.com/jenngeorge/image/upload/v1472956347/aalunchmeet/mhf8vbkkj3iwyiy7ffii.jpg",
  zip_code: "94133",
  role: "developer",
  about: "making stuff",
  looking_for: "developer"
)

donNorman = User.create(
  username: "DonNorman",
  password: "password",
  email: "don@norman.com",
  photo_url: "https://res.cloudinary.com/jenngeorge/image/upload/v1472956480/aalunchmeet/tthytkopww7vkjmvft5s.jpg",
  zip_code: "94102",
  role: "designer",
  about: "design === life",
  looking_for: "designer"
)

billGates = User.create!(
  username: "BillGates",
  password: "password",
  email: "bill@bill.com",
  photo_url: "https://res.cloudinary.com/jenngeorge/image/upload/v1472956562/aalunchmeet/lmgpjpotoaqsfplzbqv3.jpg",
  zip_code: "94102",
  role: "business",
  about: "working hard is good",
  looking_for: "developer")

steveJobs = User.create!(
  username: "SteveJobs",
  password: "password",
  email: "steve@steve.com",
  photo_url: "https://res.cloudinary.com/jenngeorge/image/upload/v1472956770/aalunchmeet/o1ivkvpqbtgasnse1zfl.jpg",
  zip_code: "94105",
  role: "designer",
  about: "I am pretty great.",
  looking_for: "developer")

elonMusk = User.create!(
  username: "ElonMusk",
  password: "password",
  email: "elon@elon.com",
  photo_url: "https://res.cloudinary.com/jenngeorge/image/upload/v1472956701/aalunchmeet/z1uy7krk0e9fhnhxh6d3.jpg",
  zip_code: "94121",
  role: "business",
  about: "lez go to marz",
  looking_for: "developer"
)

marissaMayer = User.create(
  username: "MarissaMayer",
  password: "password",
  email: "m@m.com",
  photo_url: "https://res.cloudinary.com/jenngeorge/image/upload/v1472956822/aalunchmeet/tdlpemiubvcyonr7xwwe.jpg",
  zip_code: "94123",
  role: "business",
  about: "looking for new opportunies ",
  looking_for: "recruiter"
)

elizabethHolmes = User.create(
  username: "ElizabethHolmes",
  password: "password",
  email: "e@e.com",
  photo_url: "https://res.cloudinary.com/jenngeorge/image/upload/v1472956937/aalunchmeet/lcegm0n1whi6fgbv4vx1.jpg",
  zip_code: "94134",
  role: "business",
  about: "everything is fine I'm doing awesome ",
  looking_for: "recruiter"
)
