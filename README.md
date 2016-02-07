# uniRecommender

## Use the Application

Go to the following URL: [http://46.101.76.91](http://46.101.76.91:8080/)

####  How to use Application

-- Current there are only two routes. The Index page outputting the recommendation and /recommend which
    allows students to like or dislike a university.

| URL           | Purpose       |
| ------------- |:-------------:|
| /             | Allows students to enter desired location & university type and outputs a recommendation |
| /recommend    | Allows students to either like or dislike a university.                                  |  

####  Future Work

#####  Home Page

1. Allow users to enter more fields apart from university type and location. E.G predicated grades.

#####  Recommend Page

1. Add navigation bar making the /recommend link more notable.
2. Add authentication to /recommend only allowing students who attended a university to rate that university.
3. Allow the user to like or dislike individual aspects of a university, not the university as a whole.

## Install

This Project will be using Node, so please download node before you try running any of the below scripts

This project will also make use of es6 (es2015) features so make sure you're using a **node version 4 or above**.

### neo4j

You'll need to [download and install neo4j (community edition)](http://neo4j.com/download/).

Once dowloaded start the Neo4J Server.

You will be asked to create your own username and password. Once done, change the Username and Password in the config/connection.js file.

(should really use .env for this)

## Install & Run Commands

1. `npm install`
2. `npm run dbtest`
3. `npm run dbseed`
4. `npm start`
