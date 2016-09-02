##Day 4 notes

### Stuff I did
+ got yelp api working
+ successfully receiving neighborhoods and lat/long center of zipcodes
  - if the first 100 businesses for a zipcode don't have neighborhoods, substitute the city
+ added location to user jbuilder
  - is nested under user, like {user: {id:1, location: {location info}}}


### notes
+ should probably handle potential errors for zip codes:
  - zip code does not exist
  - no businesses in zip code have a neighborhood
