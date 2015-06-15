json.extract! project, :id, :title, :description, :goal_amount, :end_date, :image_path
json.owner project.owner, :id, :name
