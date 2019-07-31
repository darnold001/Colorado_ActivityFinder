class CreateTrails < ActiveRecord::Migration[5.2]
  def change
    create_table :trails do |t|
      t.string :name
      t.string :difficulty
      t.string  :rating
      t.string :url
      t.string :img
      t.string  :length
      t.string  :eChange
      t.references :user, foreign_key: true
      t.timestamps
    end
  end
end
