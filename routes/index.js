var express = require('express');
var router = express.Router();
const assert = require('assert');
const MongoClient = require('mongodb').MongoClient;
const { ensureAuthenticated } = require('../config/auth');

// Connection URL
const url = 'mongodb+srv://Corona:Password.2020@cluster0.7dopu.mongodb.net/E-Commerce?retryWrites=true&w=majority';

// Database Name
const dbName = 'E-Commerce';
let db;

// Connect to MongoDB
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  
  db = client.db(dbName);

  // Find all Products
  const findProducts = function() {
    const collection = db.collection('products');
    return collection.find().toArray();
  }

  // Find Featured Product
  const featuredProduct = function() {
    const collection = db.collection('products');
    return collection.find({ '_id': '4' }).toArray();
  }

  // Find User Specific Products
  const userProducts = function(seller_id) {
    const collection = db.collection('products');
    return collection.find({seller_id}).toArray();
  }

  
  // Search bar set-up
  //db.products.createIndex( { title: 'text' } );
   //db.products.find(
   // { $text: { $search: "masks gloves sanitizer" } },
    //{ score: { $meta: "textScore" } }
 //).sort( { score: { $meta: "textScore" } } );
 

  /* GET home page. */
  router.get('/', async function(req, res, next) {
    const product = await featuredProduct();
    let fullName = 'test';

    // Check user exists
    if (req.user) { 
      fullName = req.user.last_name + ', ' + req.user.first_name;
    }

    res.render('home', { product, title: 'Corona & Sons: One Stop COVID-19 Shop', fullName});
  });

  /*GET About Us page */
  router.get('/about', async function(req, res, next) {
    let fullName = 'test';
    
    // Check user exists
    if (req.user) { 
      fullName = req.user.last_name + ', ' + req.user.first_name;
    }
    
    res.render('about', { title: 'Corona & Sons: Your One Stop COVID-19 Shop', fullName });
  });

  /* GET catalog page. */
  router.get('/catalog', async function(req, res, next) {
    const products = await findProducts();

    let fullName = 'test';

    // Check user exists
    if (req.user) { 
      fullName = req.user.last_name + ', ' + req.user.first_name;
    }
    
    res.render('catalog', { products, title: 'Corona & Sons: One Stop COVID-19 Shop', fullName });
  });

  /* GET profile page */
  router.get('/profile', ensureAuthenticated, async function(req, res, next) {
    const userId = req.user._id;
    const products = await userProducts(userId);
  
    let fullName = 'test';
    
    // Check user exists
    if (req.user) { 
      fullName = req.user.last_name + ', ' + req.user.first_name;
    }

   res.render('profile', {products, fullName });
  })

  /*GET createProduct page */
  router.get('/createProduct', ensureAuthenticated, async function(req, res, next) {
    const products = await findProducts();

    let fullName = 'test';
    
    // Check user exists
    if (req.user) { 
      fullName = req.user.last_name + ', ' + req.user.first_name;
    }
    
    res.render('createProduct', { products, title: 'Create New Product', fullName});
  });



});

module.exports = router;
