class AddConversationIndexes < ActiveRecord::Migration
  def change
    add_index :conversations, :user_id
    add_index :conversations, :other_user_id
  end
end
