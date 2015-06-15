class AddImageToProjects < ActiveRecord::Migration
  def change
    add_column :projects, :image_path, :string
  end
end
