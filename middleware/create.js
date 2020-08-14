const { Product, User } = require('../models/index');

// CRUD create functionality
function create_dumb_product() {
    const product_delete_me = new Product({
        _id: '4',
        seller_id: '3',
        title: 'Delete Test',
        seller: 'Corona and Sons',
        description: 'I\'m useless, please delete me.',
        rating: 0,
        img: 'https://img.icons8.com/cotton/2x/delete-sign.png'
    });

    Product.create(product_delete_me, function(err, User) {
        if (err) return handleError(err);
        console.log('Create Product: Test Product Added');
    });    
}

module.exports = create_dumb_product;