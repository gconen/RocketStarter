class Project < ActiveRecord::Base
  validates :owner, :title, :description, :goal_amount, presence: true
  validates :title, uniqueness: {scope: :owner}
  validates :goal_amount, numericality: { greater_than: 0 }
  belongs_to(
    :owner,
    class_name: "User",
    foreign_key: :owner_id,
    primary_key: :id,
    inverse_of: :projects
  )
end
