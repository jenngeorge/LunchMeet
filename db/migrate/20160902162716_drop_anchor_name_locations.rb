class DropAnchorNameLocations < ActiveRecord::Migration
  def change
    remove_column :locations, :anchor_name, :string 
  end
end
