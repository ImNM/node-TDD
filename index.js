
var express = require("express");
const bodyParser = require("body-parser")
var app = express();
var user = require('./api/user')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/users',user);

app.listen(3000, function(){
    console.log('Example app listening on port 3000!')
})

module.exports = app;