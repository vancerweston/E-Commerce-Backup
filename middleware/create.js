// CRUD create functionality
module.exports = {
    create_operation (default_create) {
        console.log('Create');
        console.log(default_create);
        //console.log(default_create);
        //promises the executing function returns a special object to you (the promise) and then you tell the promise what to do
        let save_promise = default_create.save();
        // True or False if we are getting a promise back
        save_promise.then ((save_create) => {
            console.log('ID: ' + save_create._id);
            console.log(save_create);
        }).catch((err) => {
            console.log('Error: ', err);
        });  
    }  
}

/*function create_dumb_product() {
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
    });*/

//module.exports = create_dumb_product;