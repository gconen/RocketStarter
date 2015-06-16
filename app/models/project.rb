class Project < ActiveRecord::Base
  validates :owner, :title, :description, presence: true
  validates :goal_amount, :end_date, :image_url, presence: true
  validates :title, uniqueness: { scope: :owner }
  validates :goal_amount, numericality: { greater_than: 0 }
  validate :valid_end_date

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
  belongs_to :category, inverse_of: :projects

  # Warning: N+1 query if used for N projects
  # Todo: fix that
  def amount_raised
    pledges.sum(:amount)
  end

  def num_sponsors
    pledges.select(:sponsor_id).distinct.count(:sponsor_id)
  end

  def valid_end_date
    if Time.now + 23.hours > end_date
      errors.add :end_date, "must be at least 1 day away"
    elsif Time.now + 60.days < end_date
      errors.add :end_date, "cannot be more than 60 days away"
    end
  end
end
