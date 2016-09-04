class AddUserInterests < ActiveRecord::Migration
  def change
    add_column :users, :mentor, :integer
    add_column :users, :hiring, :integer
    add_column :users, :friendship, :integer
    add_column :users, :collaboration, :integer
  end
end
