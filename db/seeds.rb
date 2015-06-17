# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

voyages = Category.create!(title: "Voyages")
vehicles = Category.create!(title: "Reusable Vehicles")
stations = Category.create!(title: "Permanent Stations")

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
  amount: 15,
  description: "A special, limited edition \"Friend of Guests\" t-shirt."
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

names = %w(Alice Bruce Carol David Eve Frank Gwendolyn Harold Isabelle Jebidiah
            Karen Luke Mary Nathan Ophelia Peter Quinn Robert Sarah Thomas
            Ursula Vincent Wanda Xavier Yolande Zachary)
users = []
names.each do |name|
  users << User.create!(
    name: name,
    email: "#{name}@example.com",
    password: "password"
  )
end

jeb = User.find_by(name: "Jebidiah")
jeb.name = "Jebidiah's Space Agency and Junkyard Supply Co"
jeb.save!

jeb_project = jeb.owned_projects.new(
  title: "Getting into space",
  goal_amount: 5000,
  description: "We've been told that we can't officially call ourselves a space agency until we've actually been to space. So we're raising money to build a rocket to get there! Give us some help at making this first step into rocket design.",
  end_date: Time.now - 1.day,
  image_path: "v1434576555/Explorer1_rilaqh.jpg",
  category_id: voyages.id
)

jeb_project.rewards.new(
  amount: 25,
  description: "We're not sure what space is made out of, but whatever it is, we'll bring you back a bottle."
)

jeb_project.rewards.new(
  amount: 100,
  description: "When Jebidiah returns to the earth, he'll personally thank you for make the flight possible."
)

jeb_reward = jeb_project.rewards.new(
  amount: 2000,
  description: "You get a piece of genuine space agency exploded rocket debris, taken from the remains of some of our previous launch attempts."
)

jeb_project.save!({ validate: false })

users.each do |user|
  pledge = user.pledges.new(
    amount: 2345,
    project_id: jeb_project.id,
    reward_id: jeb_reward.id,
  )
  pledge.save(validate: false)
end

sert = User.new(
  name: "Space Energy Research Team",
  email: "sert@example.com",
  password: "password"
)

sert.save!

sert_project = sert.owned_projects.new(
  title: "Solar Power Satellite",
  goal_amount: 100000,
  description: "Think of it, the infinite free power of the sun, beaming down for all to use. We'll launch a fleet of satellites with large solar panel arrays which will collect the copious solar power available above the atmosphere, which will be beamed down via a microwave transmitter (which is totally safe, and not at all a death ray) to collection stations on earth, to be distributed freely for the good of all mankind.",
  end_date: Time.now + 30.days,
  image_path: "v1434408298/Solar_natdru_nenrsj.jpg",
  category_id: stations.id
)

sert_project.rewards.new(
  amount: 25,
  description: "Free power! I mean, eventually we'll be giving everyone free power, but you'll get yours first."
)

sert_project.rewards.new(
  amount: 500,
  description: "We'll etch your name into the earth (in some suitable location, contact us for more details) using one of our death ra-, I mean one of our microwave transmitters."
)

sert_project.save!

bruce = User.find_by(name: "Bruce")

bruce_project = bruce.owned_projects.new(
  title: "Stop the Killer Asteroid",
  goal_amount: 500000,
  description: "An asteroid the size of Texas is on a collision course with Earth. Scientists have calculated that the only way to save humanity is to blow the asteroid apart by detonating a bomb deep below the surface. The world has to come together to launch an motley team of unlikely heroes who will land on the asteroid, drill to the required depth to insert the bomb, and detonate it.",
  end_date: Time.now + 18.days,
  image_path: "v1434574009/girsflc5ileinkmakhhj.jpg",
  category_id: voyages.id
)

bruce_project.rewards.new(
  amount: 1,
  description: "You get the satisfaction of knowing that you helped save humanity. Including yourself."
)

bruce_project.rewards.new(
  amount: 30,
  description: "You'll be mentioned in a special national thank-you speech, by the President of the United States. US citizens only, sorry."
)

bruce_project.rewards.new(
  amount: 500,
  description: "For some reason, the portable mining rigs we'll be using to drill into the asteroid came equipped with gatling guns. We won't need those, so we'll give you one."
)

bruce_project.rewards.new(
  amount: 5000,
  description: "A secure place in one of the bunkers we're building in case this mission somehow fails."
)

bruce_project.save!

nasa = User.new(
  name: "NASA",
  email: "nasa@example.gov",
  password: "password"
)

nasa.save!

maven = nasa.owned_projects.new(
  title: "MAVEN",
  goal_amount: 100000,
  description: "The Mars Atmosphere and Volatile EvolutioN Mission, or MAVEN, is a probe designed to study the Martian atmosphere. It's believed by most scientists that Mars once had a much thicker atmosphere than it has now. By studying the atmosphere now, and particularly how the atmosphere interacts with solar wind, hopefully we'll be able to determine what lead to the thicker atmosphere being lost.",
  end_date: Time.now + 28.days,
  image_path: "v1434579704/Artist_concept_of_MAVEN_spacecraft_atqswd.jpg",
  category_id: voyages.id
)

maven.rewards.new(
  amount: 1,
  description: "We'll be listing all contributors (at this and higher levels) for a special thank you on our website."
)

maven.rewards.new(
  amount: 20,
  description: "A NASA pin, delivered with a thank you letter from the project team lead."
)

maven.rewards.new(
  amount: 150,
  description: "An invitation to observe the launch at our Cape Canaveral launch facility."
)

maven.rewards.new(
  amount: 700,
  description: "Honorary coauthorship credit on one of the scientific papers resulting from the project."
)

maven.save!

rel = User.new(
  name: "Reaction Engines Limited",
  email: "rel@example.co.uk",
  password: "password"
)

rel.save!

skylon = rel.owned_projects.new(
  title: "Skylon Spaceplane",
  goal_amount: 350000,
  description: "The Skylon spaceplane is a revolutionary design for a single stage to orbit (SSTO) craft, which will dramatically reduce the price of lifting satellites and other objects to low earth orbit. It takes advantage of the innovative new Synergistic Air-Breathing Rocket Engine (SABRE), a revolutionary rocket design which, instead of being solely dependent on liquid oxygen, can use oxygen from the air while in the atmosphere, resulting in significant weight savings.",
  end_date: Time.now + 14.days,
  image_path: "v1434581583/Skylon_diagram_rz01ex.jpg",
  category_id: vehicles.id
)


skylon.rewards.new(
  amount: 35,
  description: "You can launch your own mini-satellite (1 kg or less) using the Skylon spaceplane."
)

skylon.rewards.new(
  amount: 4000,
  description: "You can experience space for yourself in out specially designed habitation module launched by the Skylon spaceplane."
)

skylon.save!
