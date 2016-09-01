##Day 2 notes

### Stuff I did
+ update currentUser's profile
+ guest signin



### notes
+ expand user profile show to all users, not just currentUser
+ later: animate guest signin to fill out the form

#how to get zips/neighborhoods/distance
google geolocater:
-make get request with address key -- pass it the zipcode
  -find lat/long from this ^
-users model: after save (AR): look in zipcode table
  -exists? use that id
  -doesnt exist? add, use this new id
  -users table has a foreign key pointing to zips table
