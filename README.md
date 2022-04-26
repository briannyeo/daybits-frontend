# Daybits

Daybits is your companion tool to build or break the habits that will truly change your life in meaningful and positive ways.

*You’ll never change your life until you change something you do daily. The secret of your success is found in your daily routine. 
-John C. Maxwell*

## About Daybits

- 📆 **30 days**
- 🏆 **Set Habit Changing Goals**
- 📝 **Journal Daily**
- 👨‍👩‍👧‍👦 **Stay accountable with the Daybits Community**

## The Science behind Daybits

- Daybits was designed on the back of the concept - Self-directed neuroplasticity (a term coined by [Dr. Jeffrey Schwartz](https://jeffreymschwartz.com/) and [Dr. Rick Hanson](https://www.rickhanson.net/books/hardwiring-happiness/)

- Self-directed neuroplasticity provides evidence for how people can intentionally rewire their brains to create positive habits thorugh **active reflection** and **positive reinforcement**

- Daybits facilitates the process of self-directed neuroplasticity by encouraging active reflection through 📝 **daily journaling**

- The 👨‍👩‍👧‍👦 **Daybits community** provides encouragement and support that completes the habit loop with positive reinforcement

## Technical Details

1. MERN stack (MongoDB, ExpressJS, ReactJS, NodeJS)
2. Schema:
    1. Journal Model
    2. Comments Model
    3. User Model with authentication
3. Includes all major CRUD functions
    1. Users can create and edit their profiles (to set their habits and goals)
    2. Users can create and delete their journal entries
    3. Users can create comments on other users' journal entries

### Other framework / tools used:
- [Swiper](https://www.npmjs.com/package/swiper) was used for the *home* page
- [Material UI](https://mui.com/material-ui/getting-started/installation/)
- [Bootstrap](https://getbootstrap.com/)
- [React calendar](https://www.npmjs.com/package/react-calendar) was used in the *planner* page
- [Dayjs](https://day.js.org/)
- [Jotai](https://jotai.org/) was used to pass the *login* state to all the components in the frontend
- [React markdown](https://www.npmjs.com/package/react-markdown)

## Project Process:

This was a group project done by a 2-person group - Brian and Krystle.

**General approach to the project**: 

Inspired by our personal desires to add more positive habits in our lives (e.g., exercising more), we sought to create a web app that would allow us to create and stick to a habit.

This led us to start with creating a [wireframe](https://www.figma.com/file/jUX2e4blUZtYgq7XQXFT84/Habit-Tracker-Project-3?node-id=0%3A1)

We started with working on both the frontend and backend together as we wanted to be aligned on the routes in the frontend, and which pages/routes needed to have corresponding GET and POST routes in the backend.

Then we worked on separate pages on the app, checking in everyday to git pull and merge to ensure that our code was aligned and to reduce merge conflicts.

## Possible future development areas

- Add user name to the navbar so that users know which account they are logged into
- Allow users to *like* the journal entries of other users
- Display the number of *comments* for each journal entry in the community page
- Create an admin function that can moderate the *comments*

### Unresolved Problems

- In the Planner page, the number of days succeeded and missed reads from the journal entries. If users delete their journal entries, the number of days does not persist on the Planner page (and will get deleted too). (We plan to fix this by storing the no. of days in the backend)

### Installation instructions:
1. `git clone` the [frontend](https://github.com/briannyeo/frontend-daybits) and the [backend](https://github.com/briannyeo/backend-daybits)
2. `npm install`

### This project is hosted on Github

Frontend:https://github.com/briannyeo/frontend-daybits

Backend: https://github.com/briannyeo/backend-daybits

### This app is deployed on:

Frontend: https://daybits-frontend.vercel.app/daybits

Backend: https://daybits-backend.herokuapp.com/


