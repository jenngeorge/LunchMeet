# initialize Yelp client
# use:  Yelp.client.search('San Francisco', parameters)
# or   Yelp.client.business('San Francisco', parameters)
require 'yelp'

Yelp.client.configure do |config|
  config.consumer_key = 'gaU8xmH2rpKMW81ABQhkDw'
  config.consumer_secret = 'ZXuEvJ0gtFAGKRVePMsqc8PxevI'
  config.token = 'Bo1ujRZqDVdUZo_kPXBsVp7KzJCkc8Bv'
  config.token_secret = 'gd6c8ppnSXzsMfPibGz2bDuyM4g'
end
