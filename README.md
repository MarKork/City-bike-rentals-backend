# City Bike Rentals App backend

## About this app

This app is a backend for an app showing the data for city bike rental journeys and stations in Helsinki Capital area. It has been created using Node.js and Mongoose. It uses MongoDB as database for saving the data.

## Endpoints

In this backend there are endpoints for checking the total number of saved items in the database for journeys and stations. There are also endpoints for getting all saved journeys and also journeys with a certain departure station or a certain return station. For stations there are endpoints for getting all saved stations and also for getting one station by name and one station by id. And also there are endpoints for saving one station and saving one journey.

## How to use 

For using this backend you must have a .env file with the MongoDB connection string in it. There is a user name and a password in it and also the database name. Mine is called “kaupunkipyorat”. In my .env file the string is set to MONGODB_URI.

For using this app you should fork the repository for your own PC/laptop and give this order in the terminal: 

### `npm install`

After installation give this: 

### `npm run dev`

for starting it locally.

