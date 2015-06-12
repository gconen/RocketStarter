class CreateRewards < ActiveRecord::Migration
  def change
    create_table :rewards do |t|
      t.integer :project_id, null: false
      t.integer :amount, null: false
      t.string :description, null: false

      t.timestamps null: false
    end

    add_index :rewards, :project_id
    add_column :pledges, :reward_id, :integer
    add_index :pledges, :reward_id
  end
end
