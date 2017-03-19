class FixAcceptableResponseName < ActiveRecord::Migration
  def change
    rename_column :question_responses, :acceptable, :acceptable_option_id
  end
end
