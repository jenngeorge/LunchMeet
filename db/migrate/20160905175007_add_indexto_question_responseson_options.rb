class AddIndextoQuestionResponsesonOptions < ActiveRecord::Migration
  def change
    add_index :question_responses, :question_option
  end
end
