<!-- @format -->

# Plogger (Phonecalls Log App) 

## Description

Communication between parents and teachers is a key part for the educational success of young students. This app registers all the important information taken from every conversation between staff and families.

## The end goal

To make the access, manipulation and follow-up of phone conversation registers easier for both educators and parents of students.

## Background info 

The creation of this app was inspired by the fruits app modeled for students of SEIR Flex at GA and my personal experience managing a school of languages in Buenos Aires, Argentina.

## Features

- Index Page

  - The main page is an index page that renders all of the phonecall logs organized in a chronological way.

- Detailed cards

  - Each 'plog' contains detailed information about the phonecall, names of all the parts involved, dates, reason for calling and a visual aid to easily identify which entries need a follow up.

- Nav bar

  - A header navigation bar with links to Phonecalls log (main) webpage -dummylink-, a "New" option to create a new 'plog' and a search bar to help the user find specific 'plogs' using keywords.

- Sessions

  - Different users will have access to different features. The school staff has full CRUD options, but the parents will only be able to read.

## Screenshots


<a href="https://imgur.com/meFzX1Z"><img src="https://i.imgur.com/meFzX1Z.png" title="source: imgur.com" /></a>
Index view


<a href="https://imgur.com/7UBs8rl"><img src="https://i.imgur.com/7UBs8rl.png" title="source: imgur.com" /></a>
New plog


<a href="https://imgur.com/PUIyT7E"><img src="https://i.imgur.com/PUIyT7E.png" title="source: imgur.com" /></a>
Plog (show)


## Technologies Used

- MongoDB
- express
- JSX
- JavaScript
- TailWind
- brcryptjs
- express-session
- jsx-view-engine
- Morgan
- react
- Trello


## Getting started 

- https://plogger.herokuapp.com/ (not deployed)
- sign up if you are a new user or use your existing name and password.
- ---
- BONUS APP (deployed)
- https://video-logger.herokuapp.com/

## Next Steps (Ice Box Features)

- Commenting on existing plogs
- Photograph integration (when evidence is required)
- Users with restricted features (parents)

## Wire Frame and ERD

<a href="https://imgur.com/uHBO8LZ"><img src="https://i.imgur.com/uHBO8LZ.png" title="source: imgur.com" /></a>
wireframe

<a href="https://imgur.com/LLnwMlk"><img src="https://i.imgur.com/LLnwMlk.png" title="source: imgur.com" /></a>
ERD


## Restful routes table
| URL | HTTP VERB| Mongoose model function 
|:--------:| -------------:| -------------:|
| /plogs/ | GET |.find
| /plogs/new | GET |N/A
| /plogs | POST |.create
| /plogs/:id | GET |.findById
| /plogs/:id/edit | GET |.findById
| /plogs/:id | PUT |.findByIdAndUpdate
| /plogs/:id | DELETE |.findByIdAndDelete
