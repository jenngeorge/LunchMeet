class AddIndexes < ActiveRecord::Migration
  def change
      add_index :question_responses, :question_id
      add_index :question_options, :question_id
      
  end
end
