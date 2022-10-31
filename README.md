# WAG
## Wag is a MERN stack app, utilizing Typescript

Wag is a site boasting several games we all love, Minesweeper, Sudoku, and Tetris. Create an account to have easy access to your scores, or don't, it's up to you! 

[Server Repo](https://github.com/IanDab47/WAG-Server)


## image of our main page. (mobile, desktop)


## Installation Instructions
## Client Installation Instructions

1. Fork on GitHub and clone down this repository
1. Run npm install to ensure dependancies are installed
1. Touch a .env.local file see .env.example to orient your secrets
1. In your terminal, run the command npm run dev to start the client
1. Navigate to http://localhost:3000/ to interact with the web app

## Server Installation Instructions

1. Fork our Server repository on GitHub and clone it down
1. Run npm install to ensure dependancies are installed
1. Touch a .env file following .env.example
1. Run nodemon to start server


## Tech Stack Used


* Javascript 
* Typescript
* Express
* Ant Design Css Framework
* MongoDb, Mongoose
* Node.js
* Next.js
* JWT, Bcrypt, passport.js if we can figure it out.


## ERDs


![Schema of MongoDB](https://i.imgur.com/SxLtIaW.png)


## RESTful Routing Chart

not what we actually ended up using.

Home Routes

| Request | Route | Description |
|:-------:|:-----:|:-----------:|
| GET | / | Homepage |
| GET | /login | Shows login view |
| POST | /login | Logs in user |
| GET | /register | Shows register view |
| POST | /register | Registers new user |
| GET | /user/:id | Shows user profile |
| GET | /user/:id/edit | Shows edit user view |
| PUT | /user/:id/edit | Edits current user
| DELETE | /user/:id | Deletes user profile |

Game Routes

| Request | Route | Description |
|:-------:|:-----:|:-----------:|
| GET | /games | Browse games |
| GET | /games/:gameName | gameName game |
| GET | /games/:gameName/scores | Shows high scores for gameName game |
| POST | /games/:gameName | Submit new score |


## Wireframes

Mobile pages
![mobile first homepages](https://i.imgur.com/fSx2BvX.png)

Mobile games
![mobile first standard game mockups](https://i.imgur.com/7C1TeFf.png)

Desktop mapping
![desktop standard mapping](https://i.imgur.com/wStNWrS.png)

Desktop modals mapping
![desktop modal mapping](https://i.imgur.com/xhdopxe.png)


Desktop modals
![desktop modals](https://i.imgur.com/ebbLDnm.png)



## User Stories


* as a user I want to be able to play some of my favorite puzzle games
* as a user I want to be able to make an account to store my scores for these puzzle games
* as a user I want to be able to see a home page detailing these games, and allow me to make a decision on which i should play
* as a user I want to be able to experience these games mobile first, but also on a desktop. 


## Our Approach Used


As a group we all enjoy playing puzzle games from time to time, especially on our phones. this lead us to want to create P4, a collection of our favorite things.

we used Figma primarily for our scheduling and workflow tracker. The provided tools worked much better than our previous interactions with miro, and it lead to easy collaboration, and implementation. We wanted to test ourselves with this project which is why we decided to go with Typescript, and Next.js as new technologies as well as ant design.

Our Git Managers were Ian, and Sebastian. Github issues were not really a problem as we kept eachother updated on changes and with figma seeing who was working where was quite easy.

For vocal and visual collaboration we used Discord primarily, our main focus during this project was to help eachother learn and grow.



## Unsolved Problems


We overextended with what we wanted to learn and do, and we weren't able to deliver on everything we had hoped. we learned a lot of new stuff but some design flaws made it so that we couldnt get it to the best it could be.


## MVP, Stretch Goals, Takeaways


## MVP

- [x] a mobile first application, allowing us to play at minimum 3 games (Minesweeper, Sudoku, Tetris)
- [x] the games having solved versions if applicable -- the user can be informed of the answer
- [x] the user is able to make an account that tracks their scores
- [x] the user is able to delete their account if wanted
- [ ] the user can update their profile if needed
- [x] a visitor can play any game in the app but their score will not be tracked
- [ ] proper auth

## Stretch

- [ ] incredibly styled views
- [ ] games hold state when changed or the page is left
- [ ] logo and favicon for our app
- [ ] a share option for games much like wordle
- [ ] a daily challenge for the game


## Daily Work Process

![Week outline for project](https://i.imgur.com/Iln2wZ6.png)

### Tuesday
- Learn TypeScript (ez no-brainer one-hour max), begin routing, create homepage

### Wednesday
- Begin working on game functionality (if not started yet)
- Ian: Minesweeper (possibly snake as well)
- Sebastian: Git commit sudoku (possibly tic-tac-toe)
- Brandon: Tetris (maybe golf as well)

### Thursday
- Continue working with TypeScript/React on game functionality and ideally finish
- Ian: Minesweeper (possibly snake as well)
- Sebastian: Git commit sudoku (possibly tic-tac-toe)
- Brandon: Tetris (maybe golf as well)

### Friday
- Finish Game Mechanics/Functionality (if any left), Begin Learning Ant Design and start css mobile

### Saturday
- CSS Design towards Mobile functionality
- Possibly get started on desktop view

### Sunday
- Finish any mobile viewings
- Finish desktop view



## About Us


### Brandon Wu

<img src="https://media-exp1.licdn.com/dms/image/D4E03AQG1Aa9OqPkwmQ/profile-displayphoto-shrink_800_800/0/1667144996437?e=1672876800&v=beta&t=-ez8ZLIGE9DwLa7T0EKbiOCCxKfCenMQSa3q78k20v0" width=200 height=200 alt=''>

Full-Stack Developer that enjoys a freshly-brewed cup of coffee in the morning. I'm always looking to connect with others and love making humorous/unique programs with great teams. Message me at my links below and other places on the internet :)

[Github](https://github.com/brandon-w1205) |
[Linkedin](https://www.linkedin.com/in/brandonjwu/) |
[Portfolio](https://brandonw.vercel.app)

### Ian Dabinett

<img src="https://avatars.githubusercontent.com/u/110520418?v=4" width=200 height=200 alt=''>

A software developer with a passion for unique designs and clacky keyboards. Previously worked as a video and music producer, and I'm now on a mission to start cool projects with awesome people. Links below for more info

[Github](https://github.com/IanDab47 ) |
[Linkedin](https://www.linkedin.com/in/ian-dabinett/) |
[Portfolio]()

### Sebastian Manion

<img src="https://media-exp1.licdn.com/dms/image/C5603AQFKVY3ljseKuQ/profile-displayphoto-shrink_800_800/0/1660083494530?e=1671667200&v=beta&t=v-Znxg-d_QXgopWPvjNme3ivOvzE_3ezREUD5R0F0j0" width=200 height=200 alt='sebastian manion' >

I am a web developer from Seattle Washington, I love rainy days, and puzzles. if you want to get to get into contact with me feel free to connect with me on Linkedin.

[Github](https://github.com/Manion-sebastian) | 
[Linkedin](https://www.linkedin.com/in/sebastianmanion/) |
[Portfolio](https://sebastian-manion.vercel.app/)
