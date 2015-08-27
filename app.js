var express = require('express');
var app = express();
var port = 3000;
var routes = require('./routes');
var bodyparser = require('body-parser');

app.set('view engine','ejs');

app.use(bodyparser.urlencoded({extended: true}));

app.get('/',routes.index);
app.get('/content',routes.home.home);
app.get('/contact',routes.contact);
app.post('/receiveMessage',routes.receiveMessage);




app.get('/me',function(req, res)
{
    res.send("<h1>Facebook</h1> http://www.facebook.com/mh.svo");
});

app.get('/who/:name?',function(req, res)
{
    var name = req.params.name;
    res.send("<h1>Invoked By: </h1>"+name);
});

app.get('*',function(req, res)
{
    res.send("<h1 style='color: #0074a2;'>Oppps !!!</h1>You made an invalid request");
});

app.get('/^m[a-z]+$/',function(req, res)
{
    res.send("<h1 style='color: #0074a2;'>WOW !!!</h1>You made an invalid request");
});

var server = app.listen(port,function()
{
    console.log("Application is listening on port "+port);
});



