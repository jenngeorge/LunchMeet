class AddOptiontoResponses < ActiveRecord::Migration
  def change
    add_column :question_responses, :question_option, :integer
  end
end
