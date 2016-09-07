class CreateMessages < ActiveRecord::Migration
  def change
    create_table :messages do |t|
      t.integer :conversation_id, null: false
      t.integer :sender_id, null: false
      t.integer :receiver_id, null: false
      t.text :content
      t.timestamps null: false
    end

    add_index :messages, :conversation_id
    add_index :messages, :sender_id
    add_index :messages, :receiver_id
  end
end
