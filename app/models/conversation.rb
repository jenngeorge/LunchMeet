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

class Conversation < ApplicationRecord

  has_many :messages

  belongs_to :user,
    class_name: User,
    foreign_key: :user_id,
    primary_key: :id

  belongs_to :other_user,
    class_name: User,
    foreign_key: :other_user_id,
    primary_key: :id

end
