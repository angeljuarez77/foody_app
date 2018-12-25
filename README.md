# Foody Website

In this repo we will be working on a food website where users would be able to upload youtube videos with the recipe they are showing us how to make. Users would be able to see each others recipes and rate them (star rating 1-5). They would also be able to filter through the list of recipes by three options vegan, vegetarian ,and everything else.

Essentially the way the user will interact with our website is by signing up if they don't have an account or logging in if they do. Then they will just see a dashboard with all the recipes in the website and somewhere there will be checkboxes where if you click them then you will be able to filter through types of food recipes.

If a user wants to upload a video then they have to put in a link, name for the recipe, and optionally they could have a description and they could indicate whether it's vegan, vegetarian, or if it has meat. If they don't put indicate whether it's any of those 3 options it would just be lumped in with everything else. Regardless of what it is.

As they scroll through the dashboard they will be able to click on the recipe and get a more detailed view of it and in this screen they would be able to give the star ratings and or favorite the recipe.

## dependencies used
+ bcrypt-nodejs
+ cors
+ express
+ morgan
+ nodemon
+ body-parser
+ pg
+ pg-hstore
+ sequelize

## WANT TO CONTRIBUTE?!?!?!?!?!
If you want to contribute to this project then you could clone this down into your machine and after that you will have to cd into the folder you created and run ```npm i```. This will install all the dependencies that is required to use this app. After this if you type ls into your current folder you will see a directory called "foody". You will also have to cd into this and run ```npm i```.

After that all you have to do is open this in your favorite text editor and start typing!!

Main features
![Food app schema and ERD](https://github.com/angeljuarez77/foody_app/blob/master/p3_proposal/pg1.jpg)

This is a combination of our schema and ERD for the database that we will use
![Food app schema and ERD](https://github.com/angeljuarez77/foody_app/blob/master/p3_proposal/pg6.jpg)

This is a rough concept of what will be the component hierarchy
![React component hierarchy](https://github.com/angeljuarez77/foody_app/blob/master/p3_proposal/pg5.jpg)

These picture are our initial wireframe
![Wireframe - opening page](https://github.com/angeljuarez77/foody_app/blob/master/p3_proposal/pg2.jpg)
![Wireframe - log in sign up page](https://github.com/angeljuarez77/foody_app/blob/master/p3_proposal/pg3.jpg)
![Wireframe - view when they are signed in](https://github.com/angeljuarez77/foody_app/blob/master/p3_proposal/pg4.jpg)

These would be the endpoints for our API
![Endpoints for our API](https://github.com/angeljuarez77/foody_app/blob/master/p3_proposal/pg7.jpg)
## Acknowlegements
Leo, Missy, Jess, Angel

## Link To Deployed project
[Foody App](http://curious-soda.surge.sh/)
