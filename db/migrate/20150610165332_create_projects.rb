class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.integer :owner_id, null: false
      t.string :title, null: false
      t.text :description, null: false
      t.integer :goal_amount, null: false

      t.timestamps null: false
    end

    add_index :projects, :owner_id
  end
end
