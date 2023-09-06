const express = require('express')
const bodyParser = require('body-parser');
const app = express();
const winston = require("winston");
const bcrypt = require('bcrypt')
const {imbd} = require('./models')
app.use(express.json())
//link ejs/css
app.use(express.static(__dirname + '/styles'));
const path = require('path')
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }))



app.listen(3000, () => {
    console.log('server is running 3000')
})