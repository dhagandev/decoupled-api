express -e (folder name)
cd (folder name)
npm i
mkdir models controllers
npm i mongoose
mkdir config
touch config/database.js
git init
touch README.md
git add .
git commit -m "Initial Set Up"

Create repo on github

git remote add origin https://github.com/(user)/(repo name).git
git push -u origin master

Open API project folder
Rename app.js to server.js
In bin/www update line 7 to var app = require('../server');

Set up Atlas: Reference here
https://git.generalassemb.ly/SEI-CC/SEI-CC-2/blob/master/work/w05/d4/atlas-hosted-mongodb.md

Run the server using nodemon on port 8080

Determine the db models. In terminal open mongo shell by using 'mongo'.
'use (db you want to use)'
'db.(db name).insert({(model info)})'
'show collections'
'db.(db name).find({})'

Check out the routes, models, and controller of this project to see how to format those things. Since this is an api we eventually will not have a view.

Check out commits to see next steps of how to connect mongodb