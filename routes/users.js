var express = require('express');
var router = express.Router();
const User = require('../models/Users');
const bcrypt = require('bcryptjs');
const passport = require('passport');

//const { AbilityBuilder, Ability } = require('casl');
//const query = toMongoQuery(ability.rulesFor('read', 'Post'));

//const query = toMongoQuery(ability.rulesFor('update', 'Post'));

// CASL ability (basic user rules)
//function defineAbilitiesFor(user) {
  //const { can, cannot, rules } = new AbilityBuilder();

  //can browse products
  //can('read', 'Products');
  //cannot create, edit, or delete products
  //cannot('create', 'update', 'delete', 'Products', {
   // createdAt: { $lt: Date.now() - 24 * 60 * 60 * 1000 }
  //});

  //return new Ability(rules);
//};

//*****CASL ability (admin rules)*****//

//function defineAbilitiesFor(admin) {
 // const { can, cannot, rules } = new AbilityBuilder();

  //can browse products, create, edit, or delete products, 
  //and promote/demote others but not him/herself
 // can('create', 'read', 'update', 'delete', 'Products');
  //cannot demote self
  //cannot('deleteAdmin',  {
   // createdAt: { $lt: Date.now() - 24 * 60 * 60 * 1000 }
 //});

  //return new Ability(rules);
//};
  
//const ANONYMOUS_ABILITY = defineAbilitiesFor(null)

//module.exports = function createAbilities(req, res, next) {
 // req.ability = req.user.email ? defineAbilitiesFor(req.user) : ANONYMOUS_ABILITY
 // next()
//}
//******end of CASL code****//

/* GET Login page. */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Member Login' });
});

/* GET Sign Up page. */
router.get('/signup', function(req, res, next) {
  res.render('signup', { title: 'New Member Sign Up' });
});

// Sign Up Handle
router.post('/signup', (req, res) => {
  const { firstName, lastName, email, password, password2, admin } = req.body;
  let errors = [];

  // Validations
  // Check required fields
  if(!firstName || !lastName || !email || !password || !password2) {
    errors.push({ msg: 'Please fill in all fields'});
  }

  // Check Passwords match
  if(password != password2) {
    errors.push({ msg: 'Passwords do not match'});
  }

  // Check Pass Length
  if(password.length < 6 ) {
    errors.push({ msg: 'Password must be at least 6 characters'});
  }

  if(errors.length > 0) {
    res.render('signup', {
      errors,
      firstName,
      lastName,
      email,
      password,
      password2
    })
    console.log(errors);
  } else {
    // Validation passed
    User.findOne({ email: email})
      .then(user => {
        if(user) {
          errors.push({msg: 'This Email is already in use'})
          res.render('signup', {
            errors,
            firstName,
            lastName,
            email,
            password,
            password2
          })      
        } else {
            // Check Admin Status
            let adminCheck;
            if(admin === 'Admin123') {
              adminCheck = true;
            } else {
              adminCheck = false;
            }

            let _id = Math.floor(Math.random()*(100000000000000000000));

          const newUser = new User({
            _id: _id,
            first_name: firstName,
            last_name: lastName,
            email: email,
            admin: adminCheck,
            member: true,
            password: password
          });

          // Hash Password
          bcrypt.genSalt(10, (err, salt) => 
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if(err) throw err;
              // Set password to hashed
              newUser.password = hash;
              // Save User
              newUser.save()
                .then(user => {
                  if(user.admin === true) {
                    req.flash('admin_msg', 'Welcome new Administrator, Please Login')
                    res.redirect('/users/login');
                  } else {
                    req.flash('success_msg', 'You are now Signed up, Please Login')
                    res.redirect('/users/login');
                  }
                })
                .catch(err => console.log(err));
          }))
        
        }
      })
      .catch((err) => console.log(err));
  }
});



// Login Handle
router.post('/login', (req, res, next) => {
      passport.authenticate('local', {
        successRedirect: '/profile',
        failureRedirect: '/users/login',
        failureFlash: true
      })(req, res, next);
})

// Logout Handle
router.get('/logout', (req, res) => {
  req.logout();
  req.flash('success_msg', 'You are logged out');
  res.redirect('/users/login');
})

//Fake contact Handle
router.post('/contact', (req, res) => {
  const {textbox} = req.body;
  console.log(textbox);
  req.flash('success_msg', 'Thank you for reaching out!');
  res.redirect('/about');
})

module.exports = router;
