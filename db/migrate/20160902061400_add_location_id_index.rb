class AddLocationIdIndex < ActiveRecord::Migration
  def change
    add_index :users, :location_id
  end
end
