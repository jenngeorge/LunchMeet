class RemoveQuestionfromQResponse < ActiveRecord::Migration
  def change
    remove_column :question_responses, :question_id
  end
end
