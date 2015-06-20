# RocketStarter

[Live link][rocket]

[rocket]: http://www.rocketstarter.us/

## Minimum Viable Product
RocketStarter duplicates the functionality of Kickstarter. Users can:

- [x] Sign up and sign in
- [x] Create projects to request funding
- [x] View other users' projects
- [x] Fund other users' projects
- [x] Define rewards for certain funding levels on their projects
- [x] Select a reward when funding a project
- [x] See how much funding projects have received
- [x] Set end dates for project funding requests
- [x] Stop funding after project end dates
- [x] Upload images for headers and icons for their project
- [x] Categories for projects

## Design Docs
* [View Wireframes][views]
* [DB schema][schema]

[views]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication (~1 day)
I will implement user sign ups and log ins, using the standard Rails principles,
and implement a simple static page that logged in users (and only logged in
users) can view. The important parts of this phase is making sure authentication
is working properly and pushing to Heroku.

[Details][phase-one]

### Phase 2: Projects (~1-2 days)
I will add API endpoints to serve JSON information about projects, and create
backbone models and views on the static page to retrieve that information,
display it, and send new data to the server. By the end of this phase, users
will be able to create and view projects inside a backbone app.

[Details][phase-two]

### Phase 3: Funding Projects (~1 day)
I will add server-side information, API endpoints, and backbone views to allow
users to create pledges that add a certain amount of funding to a project. By
the end of this phase, users will be able to fund projects via pledges and see
how much funding a project has.

[Details][phase-three]

### Phase 4: Rewards (~1-2 days)
I will add a server-model to track rewards attached to projects and pledges, and
update the backbone forms to allow users to create rewards for their projects
and select rewards when they fund a project.

[Details][phase-four]

### Phase 5: Duration (~.5 days)
I will add end dates for projects. By the end of this phase, users creating a
project will be prompted to fill in how long funding should last for their
project, and users will no longer be able to fund (but will be able to view)
projects where funding has ended.

[Details][phase-five]

### Phase 6: Image Upload (~1 day)
I will use cloudinary to add image uploads, and update the ProjectShow and
ProjectsIndexItem view to display an uploaded image associated with the project.

[Details][phase-six]

### Phase 7: Categories (~1 day)
I will add categories for projects, which will be selected by the project's 
creator. Users will be able to view the all the projects in a category (as well as
all the projects at once) and sort projects within categories by a variety of 
attributes.

[Details][phase-seven]

### Bonus Features (TBD)
- [ ] Search for projects
- [ ] Markdown support for project descriptions
- [ ] Comments on projects
- [ ] Mark projects to follow
- [ ] Updates/Timeline for projects
- [ ] Allow video headers for projects (YouTube API?)
- [ ] Email and/or internal alerts for updates on projects (funded/not funded)


[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
[phase-six]: ./docs/phases/phase6.md
[phase-seven]: ./docs/phases/phase7.md
