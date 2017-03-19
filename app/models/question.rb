# == Schema Information
#
# Table name: questions
#
#  id         :integer          not null, primary key
#  title      :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Question < ApplicationRecord
  has_many :question_options
  has_many :question_responses
end
