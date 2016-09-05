##Day 5 notes

### Stuff I did
+ seed pictures for each person using cloudinary links
+ profile has updated values after update
+ set up geokit gem
  - google geocode api
  - looks for locations within a set distance
+ browse: filter by distance from currentUser
+ style filter, matchindex, match index items
+ add interests to users table
  - set values to -5: giver, 5: receiver, 0: not a giver/receiver case, 10: not interested
  - if two user's interest values sum to 0, they are a match
  - default all interests to 10
+ add interests to jbuilder
+ add interests to show profile


##Day 6

+ changed state on profile to only fetch the shown user, rather than ALLLLL the users
+ interests display on profile
+ interests form works
+ style interests
