class CreateLocations < ActiveRecord::Migration
  def change
    create_table :locations do |t|
      t.string :zip_code, null: false
      t.string :anchor_name, null: false
      t.float :lat, null: false
      t.float :long, null: false
      t.string :neighborhood, null: false

      t.timestamps null: false
    end
  end
end
