class CreateQuestionOptions < ActiveRecord::Migration
  def change
    create_table :question_options do |t|
      t.integer :question_id, null: false
      t.text :description, null: false
      t.timestamps null: false
    end
  end


end
