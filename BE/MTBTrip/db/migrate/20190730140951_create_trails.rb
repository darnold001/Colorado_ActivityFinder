class CreateTrails < ActiveRecord::Migration[5.2]
  def change
    create_table :trails do |t|
      t.string :name
      t.string :summary
      t.string :type
      t.string :difficulty
      t.float :stars
      t.string :location
      t.string :url
      t.string :consitionStatus
      t.string :conditionDate
      t.string :img
      t.float  :length
      t.float  :ascent
      t.float  :descent
      t.float  :lat
      t.float  :long
      t.float  :apiid
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
