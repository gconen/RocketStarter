# RocketStarter

[Live link][rocket]

[rocket]: http://www.rocketstarter.us/

RocketStarter is a single page web application built with Ruby on Rails and
Backbone.js. It's modelled on the functionality and design of Kickstarter.

##Users can:

* Sign up and sign in
* Create projects to request funding
* Browse other user's projects, optionally filtered by category and sorted by
  various criteria (popularity, recently created, etc).
* Fund other users' projects and select rewards in exchange for their funding.

## Notable Features

* Handrolled authentication (using bcrypt gem).
* Backbone.js front-end consuming a RESTful JSON API.
* Image uploading through the cloudinary API.
* Creation of any number of rewards for a project with a single form, by
  dynamically creating DOM elements with jQuery (and
  accepts_nested_attributes_for on the backend).
* Server-side sorting using custom SQL queries, including handling NULL values
  in ordering:
```
(CASE WHEN SUM(pledges.amount) IS NULL THEN 1 ELSE 0 END),
SUM(pledges.amount) DESC
```

## Design Docs
* [View Wireframes][views]
* [DB schema][schema]
* [Development Timeline][timeline]

[views]: ./docs/views.md
[schema]: ./docs/schema.md
[timeline]: ./docs/development_time.md

### Bonus Features (Todo)
- [ ] Search for projects
- [ ] Markdown support for project descriptions
- [ ] Comments on projects
- [ ] Mark projects to follow
- [ ] Updates/Timeline for projects
- [ ] Allow video headers for projects (YouTube API?)
- [ ] Email and/or internal alerts for updates on projects (funded/not funded)
