class AddEndDateToProjects < ActiveRecord::Migration
  def change
    add_column :projects, :end_date, :timestamp, null: false
  end
end
