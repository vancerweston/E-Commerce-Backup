const product = require('../models/Products');
const user = require('../models/Users');

default_product = new product({
    //check if id's are the same
    seller: product.seller,
    title: product.title,
    seller_id: user._id,
    description: product.description,
    rating: product.rating,
    img: product.img
});

updated_product_02 = new product({
    seller: 'E-Bay',
    title: 'Germ-Y',
    seller_id: '6',
    description: 'Keeps your hands clean',
    rating: 10,
    img: 'https://img.icons8.com/cotton/2x/delete-sign.png'
});

default_product_01 = new product ({
    seller: 'Nu',
    title: 'Germ-X',
    seller_id: '5',
    description: 'Kills 99% of Germs',
    rating: 5,
    img: 'https://img.icons8.com/cotton/2x/delete-sign.png'
});

module.exports = {
    default_product_01,
    updated_product_02
}