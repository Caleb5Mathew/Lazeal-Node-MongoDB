require('rootpath')();
const userController = require('./users/users.controller');
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
// const jwt = require('_helpers/jwt');
const expressJwt=require('jsonwebtoken')
const errorHandler = require('_helpers/error-handler');
const db = require('./_helpers/db');
const User = db.User;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// use JWT auth to secure the api
// app.use(jwt());

// api routes
app.use('/users', require('./users/users.controller'));

// global error handler
app.use(errorHandler);

// start server
const port = 4010   ;

app.post('/', function(req,res){
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS")
    console.log(req.body);
    res.send(req.body)
    User.create(req.body);
});



const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});
