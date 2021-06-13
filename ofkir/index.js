//créeait a simple express server
var express = require('express')

var Router = require('./routes/router')

var app = express() // initialize a verbale app withe express

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(Router);

//PORT = process.env.PORT || 5000; //process.env.PORT: because when we deploi the server moste likly isn't going to run it on port 5000 becous it has a port numbr "for my local serve 3000"

//app.listen(PORT, () => console.log('server started on port ${PORT}')); // to run a web server
app.listen(3000, function() {
    console.log("App started in port 8000");
})