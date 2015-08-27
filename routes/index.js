/**
 * Created by A.S.MMehediHasan on 8/26/2015.
 */

var fs = require('fs');

exports.index = function(req, res)
{
    res.render('default',{
        title: 'Home',
        users: ['home','some']
    });
}
exports.about = function(req, res)
{
    res.send("About Us Page");
}
exports.contact = function(req,res)
{
    res.render('contactus');
}
exports.receiveMessage = function(req,res)
{
    var messagesFromFileStr = fs.readFileSync("./data/messages.json","utf8");
   /* fs.readFile("./data/messages.json", "utf8", function(err, data) {
        if (err) throw err;
        messagesFromFileStr = data;
       console.log(data);
    });*/


    var JSONMSG = JSON.parse(messagesFromFileStr);
    var name= req.body.name;
    var email = req.body.email;
    var message = req.body.message;

    JSONMSG['Messages'].push({"Name": name , "Email": email , "Message":message});

    var data = JSON.stringify(JSONMSG);
    fs.writeFile("./data/messages.json", data, function(err) {
        if(err) {
            return console.log(err);
        }

        console.log("The file was saved!");
    });

    //console.log(req.body);
    res.send("Message Sent");
}


exports.home = require('./home');

