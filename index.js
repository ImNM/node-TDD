var express = require("express");
var app = express();

var user = [
    {id:1, name : 'alice'},
    {id:2 ,name : 'bek'},
    {id:3, name : 'chris'}
]


app.get('/users', function ( req,res){
    res.json(users);
})

app.listen(3000, function(){
    console.log('Example app listening on port 3000!')
})