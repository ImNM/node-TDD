
var express = require("express");
const bodyParser = require("body-parser")
var app = express();
var user = require('./api/user')

const syncDb = require('./sync-db')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/users',user);


syncDb().then(() =>{

    console.log("db sync")
    app.listen(3000, function(){
        console.log('Example app listening on port 3000!')
    })
})


module.exports = app;