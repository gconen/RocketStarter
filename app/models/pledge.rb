class Pledge < ActiveRecord::Base
  validates :sponsor, :project, presence: true
  validates :amount, numericality: { greater_than: 0 }
  validate :valid_reward_choice
  validate :project_not_expired

  belongs_to :project, inverse_of: :pledges

  belongs_to(
    :sponsor,
    class_name: "User",
    foreign_key: :sponsor_id,
    primary_key: :id,
    inverse_of: :pledges
  )

  belongs_to :reward, inverse_of: :pledges
  def valid_reward_choice
    if reward_id == nil
      return
    end

    reward = Reward.find_by(id: reward_id)
    unless reward
      errors.add :reward, "cannot be found."
      return
    end

    if reward.amount > amount
      errors.add :reward, "required pledge not met."
    end

    if sponsor.pledges.pluck(:reward_id).include?(reward_id)
      errors.add :reward, "already selected by a previous pledge."
    end
  end

  def project_not_expired
    if project.end_date > Time.now;
      errors.add :project, "funding has ended"
    end
  end
end
