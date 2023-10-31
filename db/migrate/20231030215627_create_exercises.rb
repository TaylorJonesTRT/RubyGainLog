class CreateExercises < ActiveRecord::Migration[7.0]
  def change
    create_table :exercises do |t|
      t.references :user, null: false, foreign_key: true
      t.string :name
      t.integer :personal_best

      t.timestamps
    end
  end
end
