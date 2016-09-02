# initialize Yelp client
# use:  Yelp.client.search('San Francisco', parameters)
# or   Yelp.client.business('San Francisco', parameters) 

Yelp.client.configure do |config|
  config.consumer_key = YOUR_CONSUMER_KEY
  config.consumer_secret = YOUR_CONSUMER_SECRET
  config.token = YOUR_TOKEN
  config.token_secret = YOUR_TOKEN_SECRET
end
