class User < ApplicationRecord
  validates :fname, :lname, :title, presence: true

  def self.find_by_credentials(fname)
    user = User.find_by(fname: fname)
    user
  end
end
