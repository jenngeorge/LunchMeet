# == Schema Information
#
# Table name: question_options
#
#  id          :integer          not null, primary key
#  question_id :integer          not null
#  description :text             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class QuestionOption < ActiveRecord::Base
  belongs_to :question
  has_many :question_responses 
end
