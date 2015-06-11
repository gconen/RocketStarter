class CreatePledges < ActiveRecord::Migration
  def change
    create_table :pledges do |t|
      t.integer :project_id, null: false
      t.integer :sponsor_id, null: false
      t.integer :amount, null: false

      t.timestamps null: false
    end

    add_index :pledges, :project_id
    add_index :pledges, :sponsor_id
  end
end
