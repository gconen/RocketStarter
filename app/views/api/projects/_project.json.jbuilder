json.extract! project, :id, :title, :description, :goal_amount, :end_date
json.owner project.owner, :id, :name
