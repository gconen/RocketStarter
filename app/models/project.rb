class Project < ActiveRecord::Base
  validates :owner, :title, :description, presence: true
  validates :goal_amount, :end_date, presence: true
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

  # Warning: N+1 query if used for N projects
  def amount_raised
    pledges.sum(:amount)
  end

  def num_sponsors
    pledges.select(:sponsor_id).distinct.count(:sponsor_id)
  end


end
