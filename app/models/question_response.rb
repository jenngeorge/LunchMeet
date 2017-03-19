# == Schema Information
#
# Table name: question_responses
#
#  id                 :integer          not null, primary key
#  user_id            :integer          not null
#  acceptable         :integer          not null
#  importance         :integer          not null
#  explanation        :text
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  question_option_id :integer
#

class QuestionResponse < ApplicationRecord
  belongs_to :user
  belongs_to :question
  belongs_to :question_option
end
