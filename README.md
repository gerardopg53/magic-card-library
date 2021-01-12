# Spell Card Library
## by Gerardo Perez

## Project Description

- **Spell Card Library** is the front end to Cory Sebastian's project0 API, which can be found at https://github.com/corith/project0.

- It provides a UI for a web server that allows you to create and store all the magic spell cards that you have found in your travels.
Simply create an account and start adding your favorite spells. Your imagination is the limit! 

## Technologies Used
    - HTML
    - CSS
    - JavaScript
    - Node v10.14.1
    - Webpack v5.10.0
    - Hosted on an AWS S3 bucket

## Features
    - Create an account: Add your email and a password to start storing your spells! 
    - Log In: Logging in as admin allows you to see all the spells other users have made. 
    - Add a Spell Card: Give it a name and a property. Magical! 
    - See your Spell Cards: Look at your fantastic creations. 

## Getting Started
    - Execute the following commands in your Terminal:
        - git clone https://github.com/gerardopg53/magic-card-library.git
        - cd magic-card-library
        - npm install
        - npm run start
    - Ensure that Cory's project0 is running in your local machine (follow his README for instructions).
    - Ensure that Cory's project0 is running locally in your machine (since the EC2 instance it was hosted on has been shut down). 
    - Cory's project0 can be found at https://github.com/corith/project0.

## Usage
    - Once the web application is running, it can be accessed at *localhost:4200*.
    - Create an account in the *Home* page. 
    - Log in to your account in the *Log In* page. 
    - Add a spell card in the *Add Card* page. 
    - View your created cards in the *view Cards* page. 
    - Log out with the *Log Out* button.

## License
This  project is provided as open source via the MIT License. Copyright (c) 2020 Gerardo Perez

### Link to S3 bucket: http://spell-card-library.s3-website.us-east-2.amazonaws.com/
    - Static web resrouces still active as of 01/12/2020.
    - Back end EC2 and RDS instances have been shut down. 
