# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

voyages = Category.create!(title: "Voyages")
vehicles = Category.create!(title: "Reusable Vehicles")
stations = Category.create!(title: "Permanant Stations")

guest = User.new(
  name: "George Guest",
  email: "guest@example.com",
  password: "password"
)

guest_project = guest.owned_projects.new(
  title: "The Visitor",
  goal_amount: 75000,
  description: "I'm a guest, I need to visit people. This will dramatically increase the efficiency of my visiting by allowing me to make suborbital flights between different hosts, maximizing the the number of times and places where I can be a guest.",
  end_date: Time.now + 15.days,
  image_path: "v1434403357/X-30_futuristic_nasa_hh7ng5.jpg",
  category_id: vehicles.id
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
  end_date: Time.now - 1.day,
  image_path: "v1434400622/sbbmntaify6poicutdy2.jpg",
  category_id: voyages.id
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


sert = User.new(
  name: "Space Energy Research Team",
  email: "sert@example.com",
  password: "password"
)

sert.save!

sert_project = sert.owned_projects.new(
  title: "Solar Power Satellite",
  goal_amount: 500000,
  description: "Think of it, the infinite free power of the sun, beaming down for all to use.",
  end_date: Time.now + 30.days,
  image_path: "v1434408298/Solar_natdru_nenrsj.jpg",
  category_id: stations.id
)

sert_project.rewards.new(
  amount: 25,
  description: "Free power! I mean, eventually we'll be giving everyone free power, but you'll get yours first."
)

sert_project.save!
