var express = require('express');
var router = express.Router();
var client= require('twilio')('AC8717a203d0f64da6f880847e01fb971e','22b1e224fa26d7713aedf862ddb7504e');
var twilio= require('twilio');

var gm = require('gm');

// gm('/../public/images/1.jpg')
// .resize(100, 100)
// .autoOrient()
// .write(writeStream, function (err) {
//   if (!err) console.log(' hooray! ');
// });




/* GET users listing. */
router.post('/', function(req, res, next) {
	//gm("http://08cc6dae.ngrok.io/images/1.jpg").scale(100, 100);


// gm('../public/images/1.jpg')
// .resize(240, 240, '!')
// .write('../public/images/1.jpg', function (err) {
//   if (!err) console.log('done');
// });



  console.log("here in the users");
  console.log(req.body);

    var subject = req.body.subject;
    var clientnum = req.body.From;
    var message = "HELLO ELLISCOPE";
  console.log(clientnum);

    // twilio.sms.messages.create({
    //     to: clientnum,
    //     from: '+9173384318',
    //     body: message
    // }, function(err, msg) {});

var resp = new twilio.TwimlResponse();
resp.message(function() {
	this.body('Trust Pound!');
    this.media('http://kubilayerdogan.net/screenshot/img.png');
    //this.media('http://www.gabelliconnect.com/wp-content/uploads/2012/09/ABC.jpg');
});

res.writeHead(200, {
	'Content-Type':'text/xml'
});

res.end(resp.toString());


//res.send('<Response><Message><Media>http://www.andrewcristi.com/disney_abc_television_group_logo_a_l.jpg</Media></Message></Response>');


//-> the phone number has to start with 1 


// client.sendMessage({

//     to: "+12132652115", // Any number Twilio can deliver to
//     from: '+19173384318', // A number you bought from Twilio and can use for outbound communication
//     body: message // body of the SMS message

// }, function(err, responseData) { //this function is executed when a response is received from Twilio

// console.log(responseData);
//     if (err) {	console.log("ERROR APPEARS");
//         //console.log(responseData.from); // outputs "+14506667788"
//         //console.log(responseData.body); // outputs "word to your mother."
//         console.log(err);
//     }
//     res.send('respond with a resource');

// });

// client.messages.create(from_='+19173384318', to=clientnum,
//         media_url="http://www.andrewcristi.com/disney_abc_television_group_logo_a_l.jpg");


  //return respond('Derp! Please text back again later.');

});

// function respond(message) {
//         response.type('text/xml');
//         response.render('twiml', {
//             message: message
//         });
//     }

module.exports = router;
