class Project < ActiveRecord::Base
  validates :owner, :title, :description, :goal_amount, presence: true
  validates :title, uniqueness: { scope: :owner }
  validates :goal_amount, numericality: { greater_than: 0 }

  belongs_to(
    :owner,
    class_name: "User",
    foreign_key: :owner_id,
    primary_key: :id,
    inverse_of: :owned_projects
  )

  has_many :pledges, inverse_of: :project
  has_many :sponsors, through: :pledges, source: :sponsor
  has_many :rewards, inverse_of: :project
  accepts_nested_attributes_for :rewards

  def amount_raised
    pledges.sum(:amount)
  end

  def num_sponsors
    pledges.count
  end


end
