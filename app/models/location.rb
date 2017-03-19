# == Schema Information
#
# Table name: locations
#
#  id           :integer          not null, primary key
#  zip_code     :string           not null
#  lat          :float            not null
#  long         :float            not null
#  neighborhood :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Location < ApplicationRecord
  acts_as_mappable :distance_field_name => :distance,
                  :lat_column_name => :lat,
                   :lng_column_name => :long
  has_many :users


end
