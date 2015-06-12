json.partial! @project
json.amount_raised @project.amount_raised
json.num_sponsors @project.num_sponsors
json.rewards @project.rewards, :id, :description, :amount, :project_id
