class CreateQuestionResponses < ActiveRecord::Migration
  def change
    create_table :question_responses do |t|
      t.integer :user_id, null: false
      t.integer :question_id, null: false
      t.integer :acceptable, null: false
      t.integer :importance, null: false
      t.text :explanation
      t.timestamps null: false
    end

    add_index :question_responses, :user_id
  
  end
end
