class Category < ActiveRecord::Base
  validates :title, presence: true
  validates :title, uniqueness: true
  has_many :projects, inverse_of: :category

  def num_projects
    projects.count
  end
end
