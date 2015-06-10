# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

guest = User.create(
  name: "George Guest",
  email: "guest@example.com",
  password: "password"
)

User.first.create(
  title: "The Visitor",
  goal_amount: "7500000",
  description: "I'm a guest, I need to visit people. This will dramatically increase the efficiency of my visiting by allowing me to make suborbital flights between different hosts, maximizing the the number of times and places where I can be a guest."
)
