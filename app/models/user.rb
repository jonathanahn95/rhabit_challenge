class User < ApplicationRecord
  validates :fname, :lname, :title, presence: true

  has_many :subordinates, class_name: 'User', foreign_key: :manager_id

  belongs_to :superior,
  foreign_key: :manager_id,
  class_name: :User,
  optional: true

  def self.find_by_credentials(fname)
    user = User.find_by(fname: fname)
    user
  end

  def self.add_user(user)
    user.subordinates.push(user)
    user
  end

  def self.get_hierarchy
     ceo = User.where(manager_id: nil).first
     if ceo.nil?
       return [].to_json
     end
     output = []
     output << self.build_hierarchy(ceo)
     output.to_json
  end

  def self.build_hierarchy(employee)
    subordinates = []
    unless employee.subordinates.blank?
      employee.subordinates.each do |emp|
        subordinates << self.build_hierarchy(emp)
      end
    end
    {id: employee.id, fname: employee.fname, lname: employee.lname, title: employee.title, direct_reports: subordinates, manager: employee.superior}
  end

  def self.destroy_subordinates(employee)
    unless employee.subordinates.blank?
      employee.subordinates.each do |emp|
        self.destroy_subordinates(emp)
      end
    end
    employee.destroy
  end

end
