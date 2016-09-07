# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  email           :string           not null
#  photo_url       :string
#  zip_code        :string           not null
#  role            :string           not null
#  about           :text
#  looking_for     :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  location_id     :integer
#  mentor          :integer
#  hiring          :integer
#  friendship      :integer
#  collaboration   :integer
#

class User < ActiveRecord::Base
  attr_reader :password

  validates :username, :password_digest, :session_token, :email, :zip_code, :role, :looking_for, presence: true
  validates :username, uniqueness: true
  validates :password, length: {minimum: 6}, allow_nil: :true

  after_initialize :ensure_session_token, :default_interests
	before_validation :ensure_session_token_uniqueness
  before_save :set_location

  belongs_to :location
  has_many :question_responses

  has_many :question_options,
    through: :question_responses,
    source: :question_option

  has_many :questions,
    through: :question_options,
    source: :question

  has_many :sent_messages,
    class_name: Message,
    foreign_key: :sender_id

  has_many :received_messages,
    class_name: Message,
    foreign_key: :receiver_id

  has_many :conversations,
    class_name: Conversation,
    foreign_key: :user_id
  # also need other user id




  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def self.find_by_credentials(username, password)
    user = User.find_by_username(username)
    return nil unless user && user.valid_password?(password)
    user
  end

  def valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64(16)
    self.save!
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64(16)
  end

  def ensure_session_token_uniqueness
    while User.find_by(session_token: self.session_token)
      self.session_token = SecureRandom::urlsafe_base64(16)
    end
  end

  def default_interests
    default_int = 10
    self.mentor ||= default_int
    self.hiring ||= default_int
    self.friendship ||= default_int
    self.collaboration ||= default_int
  end

  def set_location
    existing_zipcode = Location.where(zip_code: self.zip_code)
    if existing_zipcode.length > 0
      self.location_id = existing_zipcode[0].id
    else
      yelp_location = get_location(self.zip_code)
      new_location = Location.create!(yelp_location)

      self.location_id = new_location.id
    end
      # else something bad happened
  end

  def get_location(zip)

    response = Yelp.client.search(location=zip)
    lat = response.region.center.latitude
    long = response.region.center.longitude
    businesses = response.businesses
    has_neighborhood = false

    idx = 0
    while has_neighborhood == false && idx < businesses.length
      neighborhoods = businesses[idx].location.neighborhoods
      unless neighborhoods.nil? || neighborhoods.empty?
        neighborhood = neighborhoods[0]
        has_neighborhood = true;
        return {zip_code: zip, lat:lat, long:long, neighborhood: neighborhood}
      end
      idx +=1
    end
    return {zip_code: zip, lat:lat, long:long, neighborhood: businesses[0].location.city}
  end





end # class end
