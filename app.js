// npm module imports
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const InitiateMongoServer = require('./config/db');
const setupDefaultData = require('./config/defaultData');
const create_dumb_product = require('./middleware/create');

// application module imports
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const delete_extra_data = require('./middleware/delete');
const update_user_info = require('./middleware/update');

// database setup
InitiateMongoServer().then(setupDefaultData);

// Testing CRUD Operations
InitiateMongoServer().then(create_dumb_product);
InitiateMongoServer().then(delete_extra_data);
InitiateMongoServer().then(update_user_info);


// setting up express
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Router Middleware
app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
