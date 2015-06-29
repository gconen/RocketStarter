class RemoveContraintsOnProjects < ActiveRecord::Migration
  def change
    change_column :projects, :description, :null => true
  end
end
