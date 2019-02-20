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

  def self.get_hierarchy
     ceo = User.where(manager_id: nil).first
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
    full_name = employee.fname + " " + employee.lname
    {id: employee.id, name: full_name, title: employee.title, direct_reports: subordinates}
  end

  def self.destroy_subordinates(employee)
    subordinates = []
    unless employee.subordinates.blank?
      employee.subordinates.each do |emp|
        subordinates << self.destroy_subordinates(emp)
      end
    end
    employee.destroy
   end

end
