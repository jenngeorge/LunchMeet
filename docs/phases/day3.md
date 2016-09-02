##Day 3 notes

### Stuff I did
+ update currentUser's profile
+ guest signin
+ redirect to signup page on logout (and any time signout at a root)
+ redirect to current user show page after profile update
+ upload profile photos with cloudinary (update state displays new photo on update view)
  - works on heroku (thx figaro)
+ set up custom domain: lunchmeet.network
+ add yelp api gem


### notes
+ expand user profile show to all users, not just currentUser
+ later: animate guest signin to fill out the form

##how to get zips/neighborhoods/distance
google geolocater:
-make get request with address key -- pass it the zipcode
  -find lat/long from this ^
-users model: after save (AR): look in zipcode table
  -exists? use that id
  -doesnt exist? add, use this new id
  -users table has a foreign key pointing to zips table

Geocoding api key: AIzaSyCMHmbW3yUQwJxKdKxJedObz3zrXWQ45HA


neighborhood > locality > administrative_ara_level_1




#yelp api
-use yelp gem https://github.com/Yelp/yelp-ruby

-make get request with zip code (location parameters)
  -receive first business (if no coordinates or neighborhoods, get next business )
    -get location.coordinate.latitude / location.coordinate.longitude
    -get location.neighborhoods


    yelp keys

    Consumer Key	gaU8xmH2rpKMW81ABQhkDw
Consumer Secret	ZXuEvJ0gtFAGKRVePMsqc8PxevI
Token	Bo1ujRZqDVdUZo_kPXBsVp7KzJCkc8Bv
Token Secret	gd6c8ppnSXzsMfPibGz2bDuyM4g
