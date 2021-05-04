
const express = require('express') //you USE express by requiring it
const bodyParser = require('body-parser') //middleware - helps to tidy up request.
const app = express() //allows you to set a variable going forward
const MongoClient = require('mongodb').MongoClient; //connect to mongodb 

MongoClient.connect('mongodb+srv:demo:demo@cluster0.q1bon.mongodb.net/test?retryWrites=true&w=majority', { useUnifiedTopology: true }, (err, client) => {
    if (err) return console.error(err)
    console.log('Connected to Database')
})

//Make sure to use body-parser before CRUD handlers
app.use(bodyParser.urlencoded({ extended: true })) //tells bP to extract data from the form and add to body property in request object

//create a server that your local browser can listen to with .listen method
app.listen(3000, function() {
    console.log('listening on 3000')
})

    /*GET requests are handled with .get --> app.get(endpoint, callback), wherein the endpoint is anything after the domain. E.G. in localhost:3000/, localhost3000 is the domain, and / is requested; Callback is what to DO when the endpoint matches
        app.get('/', (req, res) => {
            res.send('Hello, World')
        })
    */
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
    // Note: __dirname is the current directory you're in. Try logging it and see what you get!
  // Mine was '/Users/zellwk/Projects/demo-repos/crud-express-mongo' for this app.
})

app.post('/quotes', (req,res) => {
    console.log(req.body)
})

//server.js
console.log('May Node be with you!')