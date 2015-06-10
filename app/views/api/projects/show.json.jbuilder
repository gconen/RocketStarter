json.extract! @project, :id, :title, :description, :goal_amount
json.owner @project.owner, :id, :name
