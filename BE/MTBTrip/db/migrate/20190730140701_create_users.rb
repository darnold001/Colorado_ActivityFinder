class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :firstname
      t.string :lastname
      t.references :trail, foreign_key: true

      t.timestamps
    end
  end
end
