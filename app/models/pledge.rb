class Pledge < ActiveRecord::Base
  validates :sponsor, :project, presence: true
  validates :project_id, uniqueness: {
    scope: :sponsor_id,
    message: "Error: You're already backing this project"
  }
  validates :amount, numericality: { greater_than: 0 }

  belongs_to :project, inverse_of: :pledges

  belongs_to(
    :sponsor,
    class_name: "User",
    foreign_key: :sponsor_id,
    primary_key: :id,
    inverse_of: :pledges
  )


end
