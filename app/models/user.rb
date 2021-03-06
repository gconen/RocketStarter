class User < ActiveRecord::Base

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return user if user && user.is_password?(password)

    return nil
  end


  validates :name, :email, :password_digest, :session_token, presence: true
  validates :email, :session_token, uniqueness: true
  validates :password, length: {minimum: 6, allow_nil: true}

  after_initialize :ensure_session_token

  attr_reader :password

  has_many(
    :owned_projects,
    class_name: "Project",
    foreign_key: :owner_id,
    primary_key: :id,
    inverse_of: :owner
  )

  has_many(
    :pledges,
    class_name: "Pledge",
    foreign_key: :sponsor_id,
    primary_key: :id,
    inverse_of: :sponsor
  )

  has_many :sponsored_projects, through: :pledges, source: :project

  def is_password?(password)
    BCrypt::Password.new(password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def ensure_session_token
    self.session_token = SecureRandom.urlsafe_base64
  end

  def reset_session_token!
    session = SecureRandom.urlsafe_base64
    self.session_token = session
    self.save!

    session
  end


end
