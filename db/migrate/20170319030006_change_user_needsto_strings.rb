class ChangeUserNeedstoStrings < ActiveRecord::Migration
  def change
    change_column :users, :mentor, :string
    change_column :users, :hiring, :string
    change_column :users, :friendship, :string
  end
end
