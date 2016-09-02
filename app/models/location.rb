# == Schema Information
#
# Table name: locations
#
#  id           :integer          not null, primary key
#  zip_code     :string           not null
#  anchor_name  :string           not null
#  lat          :float            not null
#  long         :float            not null
#  neighborhood :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Location < ActiveRecord::Base
  has_many :users

end
