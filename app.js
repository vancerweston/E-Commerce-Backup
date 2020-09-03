// npm module imports
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const InitiateMongoServer = require('./config/db');
const setupDefaultData = require('./config/defaultData');
// const create_dumb_product = require('./middleware/create');

const flash = require('connect-flash');
const session = require('express-session');

// PassPort
const passport = require('passport');
require('./config/passport-config')(passport);

// application module imports
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// Database Set Up
InitiateMongoServer().then(setupDefaultData).catch((err) => {throw err});

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

// Express Session
app.use(session({
  secret: 'henry',
  resave: true,
  saveUninitialized: true
}));

// PassPort
app.use(passport.initialize());
app.use(passport.session());

// Connect Flash
app.use(flash());

// Global Vars
app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.admin_msg = req.flash('admin_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
})

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
