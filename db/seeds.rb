# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all

User.create!([
  {fname: 'Dade', lname: "Murphy", title: 'CEO'},
  {fname: 'Kate', lname: "Libby", title: 'CTO'},
  {fname: 'Edward', lname: "Vedder", title: 'CFO'},
  {fname: 'Margo', lname: "Wallace", title: 'VP of Public Relations'},
  {fname: 'Eugene', lname: "Belfort", title: 'VP of Engineering'},
  {fname: 'Richard', lname: "Gill", title: 'Public Relations Manager'},
  {fname: 'Emmanuel', lname: "Goldstein", title: 'Lead Software Engineer'},
  {fname: 'Paul', lname: "Cook", title: 'Software Engineer'},
  {fname: 'Joey', lname: "Pardella", title: 'Junior Software Engineer'},
  {fname: 'Agnes', lname: "Pardella", title: 'Project Manager'},
  {fname: 'Ramon', lname: "Sanches", title: 'Software Engineer'}
  ])

users = User.all.sort

user1 = users[1]
user2 = users[2]
user3 = users[3]
user4 = users[4]
user5 = users[5]
user6 = users[6]
user7 = users[7]
user8 = users[8]
user9 = users[9]
user10 = users[10]

def add_manager(model, id, num, users)
  model_instance = model.find(id)
  model_instance.manager_id = users[num].id
  model_instance.save!
end

add_manager(User, user1.id, 0, users)
add_manager(User, user2.id, 0, users)
add_manager(User, user3.id, 0, users)
add_manager(User, user4.id, 1, users)
add_manager(User, user5.id, 3, users)
add_manager(User, user6.id, 4, users)
add_manager(User, user7.id, 4, users)
add_manager(User, user8.id, 7, users)
add_manager(User, user9.id, 3, users)
add_manager(User, user10.id, 7, users)
