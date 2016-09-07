# == Schema Information
#
# Table name: conversations
#
#  id            :integer          not null, primary key
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  user_id       :integer          not null
#  other_user_id :integer          not null
#

class Conversation < ActiveRecord::Base

  has_many :messages

end
