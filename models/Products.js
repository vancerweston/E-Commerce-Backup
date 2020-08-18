const mongoose =  require('mongoose');
const Schema = mongoose.Schema;

const product_schema = new mongoose.Schema({
    //Why do i need an id hen theres a built in object number generator
    _id: {
        type: String,
        required: false
    },
    title: {
        type: String,
        required: true,
        index: true,
        unique: true
    },
    seller: {
        type: String,
        required: true
    },
    seller_id: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    rating: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    }
});

const Product = mongoose.model('product', product_schema);

module.exports = Product;