class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :email, null:false
      t.string :photo_url
      t.string :zip_code, null: false
      t.string :type, null: false
      t.text :about
      t.string :looking_for, null: false 
      t.timestamps null: false
    end

    add_index :users, :username, unique: true
    add_index :users, :email, unique: true
  end
end
