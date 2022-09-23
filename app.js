const express = require('express')
const cdb = require('./database/cdb');
const app = express()                  
const port = process.env.PORT || 5501;
const cookieParser = require('cookie-parser')

var session = require("express-session"); //message
var flash = require("connect-flash");

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false },
  })
);

app.use(flash());

app.use(cookieParser())

const web = require('./routes/web.js')    

var bodyParser = require('body-parser') 
app.use(bodyParser.urlencoded({ extended: false })) 

app.use('/', web);    

app.use(express.static('public'))   

app.set('view engine','ejs')      

cdb();   

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })