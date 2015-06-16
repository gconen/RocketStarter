json.array! @categories do |category|
  json.extract! category, :id, :title
  json.num_projects category.num_projects
end
