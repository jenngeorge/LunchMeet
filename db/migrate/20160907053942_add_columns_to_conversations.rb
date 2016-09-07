class AddColumnsToConversations < ActiveRecord::Migration
  def change
    add_column :conversations, :user_id, :integer, null: false
    add_column :conversations, :other_user_id, :integer, null: false
  end
end
