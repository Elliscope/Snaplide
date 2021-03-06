var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');
var message =require('./routes/message');

var app = express();

var twilio = require('twilio')('AC8717a203d0f64da6f880847e01fb971e','22b1e224fa26d7713aedf862ddb7504e');


app.use(bodyParser.urlencoded({
    extended: false
}));


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers


app.use(express.static('public'));


// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

// app.post('/message', function(request, response) {
//   console.log("woredk");
  
//             // var responseMessage = "MIRACLE?!";

//             // respond(responseMessage);
// });

app.get('/message', function(req, res) {
  console.log("here inthe message");
    res.end();
});

module.exports = app;

app.listen(1337, function(){
  console.log('Server is up!');
});
