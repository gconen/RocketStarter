class CreateCategories < ActiveRecord::Migration
  def change
    create_table :categories do |t|
      t.string :title, null: false

      t.timestamps null: false
    end

    add_column :projects, :category_id, :integer
    add_index :projects, :category_id
  end
end
