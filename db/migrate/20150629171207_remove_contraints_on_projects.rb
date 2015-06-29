class RemoveContraintsOnProjects < ActiveRecord::Migration
  def change
    change_column_null :projects, :description, true
  end
end
