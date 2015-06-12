class Reward < ActiveRecord::Base
  validates :project, :description, presence: true
  validates :amount, :numericality: { greater_than: 0 } 
  belongs_to: :project
  has_many: :pledges
end
