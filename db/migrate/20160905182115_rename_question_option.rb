class RenameQuestionOption < ActiveRecord::Migration
  def change
    rename_column :question_responses, :question_option, :question_option_id
  end
end
