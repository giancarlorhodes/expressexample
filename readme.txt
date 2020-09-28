# project is based off of https://app.pluralsight.com/library/courses/node-js-express-rest-web-services-update
# Jonathan Mills Restful Web Services with Node.js and Express


# 1 SETUP MongoDb and get some documents into it 
# booksJson.js is what I used for that.
# ran the PS command - PS C:\program files\MongoDB\server\4.4\bin> Get-Content C:\temp\booksJson.js | .\mongo bookAPI

# 2 Do a  "npm install" to get libraries for package.json file, node_modules folder and it libraries
# is not part of the source and this typical of node projects.


# 3 "npm start"  - to start the server. app.js is the entry point.

PS D:\WayAround\expressexample> npm start

> api@1.0.0 start D:\WayAround\expressexample
> nodemon app.js

[nodemon] 2.0.4
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json  
[nodemon] starting `node app.js`
connecting to bookAPI ...
(node:26372) DeprecationWarning: current URL string parser is deprecated, and will be removed in a future version. To use the new parser, pass option { useNewUrlParser: true } to MongoClient.connect.
(node:26372) DeprecationWarning: current Server Discovery and Monitoring engine is deprecated, and will be removed in a future version. To use the new Server Discover and Monitoring engine, pass option { useUnifiedTopology: true } to the MongoClient constructor.
Running on port 4000


# 4 testing - you can use PostMan or browser to go to port 4000
http://localhost:4000/api/books   - example of a GET all books and will return the json result
POST, PATCH, PUT are more easily tested using PostMan

