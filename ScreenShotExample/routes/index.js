var express = require('express');
var multer  = require('multer');
var router = express.Router();
var fs = require('fs');
var sys = require('sys');
var upload = multer({ dest: '../public/images/' });

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/save',upload.single('img_val'),function(req,res,next){
	//implement the save the image file function
	//console.log(document.getElementById('img_val'));
	
	console.log(req.body);

	var img_b64 = req.body.img_val;

	var imageBuffer = decodeBase64Image(img_b64);
    console.log(typeof(imageBuffer.data));

//     fs.writeFile('message.txt', 'Hello Node', function (err) {
//   if (err) throw err;
//   console.log('It\'s saved!');
// });


    fs.writeFile('public/images/1.png', imageBuffer.data, function(err) {
   console.log("the save command reports errors");
    });

	// var png = img_b64.split(',')[1];

	// var decodedData = window.atob(png);
	// console.log(decodedData);


	// var dataurl = img_b64.replace(/^data:image\/\w+;base64,/, "");

 //    var buf = new Buffer(dataurl, 'base64');
 //    fs.writeFile('1.png', buf);
 //    console.log(buf);



// var the_file = new Blob([window.atob(png)],  {type: 'image/png', encoding: 'utf-8'});

// var fr = new FileReader();
// fr.onload = function ( oFREvent ) {
//     var v = oFREvent.target.result.split(',')[1]; // encoding is messed up here, so we fix it
//     v = atob(v);
//     var good_b64 = btoa(decodeURIComponent(escape(v)));
//     document.getElementById("uploadPreview").src = "data:image/png;base64," + good_b64;
// };
// fr.readAsDataURL(the_file);

	console.log("save post accepeted");

});

function decodeBase64Image(dataString) {
  var matches = dataString.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/),
    response = {};

  if (matches.length !== 3) {
    return new Error('Invalid input string');
  }

  response.type = matches[1];
  response.data = new Buffer(matches[2], 'base64');

  return response;
}



module.exports = router;
