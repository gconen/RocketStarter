# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

guest = User.new(
  name: "George Guest",
  email: "guest@example.com",
  password: "password"
)

guest_project = guest.owned_projects.new(
  title: "The Visitor",
  goal_amount: 75000,
  description: "I'm a guest, I need to visit people. This will dramatically increase the efficiency of my visiting by allowing me to make suborbital flights between different hosts, maximizing the the number of times and places where I can be a guest.",
  end_date: Time.now + 15.days
)

guest_project.rewards.new(
  amount: 25,
  description: "I'll visit you, applying my expert skills as a guest."
)

guest_project.rewards.new(
  amount: 2000,
  description: "You can come along with my on a visit as a guest guest."
)

guest.save!

jeb = User.new(
  name: "Jebidiah's Space Agency",
  email: "jk@example.com",
  password: "password"
)

jeb.save!

jeb_project = jeb.owned_projects.new(
  title: "Getting into space",
  goal_amount: 5000,
  description: "We've been told that we can't officially call ourselves a space agency until we've actually been to space. So we're raising money to build a rocket to get there! Give us some help at making this first step into rocket design.",
  end_date: Time.now - 1.day
)

jeb_project.rewards.new(
  amount: 25,
  description: "We're not sure what space is made out of, but whatever it is, we'll bring you back a bottle."
)

jeb_project.rewards.new(
  amount: 2000,
  description: "You get a piece of genuine space agency exploded rocket debris, taken from the remains of some of our previous launch attempts."
)

jeb_project.save!({ validate: false })
