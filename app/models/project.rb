class Project < ActiveRecord::Base

  def self.sort_by(sort_string)
    projects = Project.all
    case sort_string
    when "EndDate"
      projects = projects.where("end_date > ?", Time.now).order(:end_date)
    when "Newest"
      projects = projects.order(created_at: :desc)
    when "MostFunded"
      projects = Project.joined_with_pledges
        .order(<<-SQL
          (CASE WHEN SUM(pledges.amount) IS NULL THEN 1 ELSE 0 END),
          SUM(pledges.amount) DESC
        SQL
        )
        #CASE WHEN to solve problems with were NULL values land in ORDER BY
    when "Popularity"
      projects = Project.joined_with_pledges
        .order("COUNT(DISTINCT pledges.sponsor_id) DESC")
    end
    projects
  end

  def self.joined_with_pledges
    Project.all
      .joins("LEFT OUTER JOIN pledges ON pledges.project_id = projects.id")
      .group("projects.id")
  end



  validates :owner, :title, :description, :category, presence: true
  validates :goal_amount, :end_date, :image_path, presence: true
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
