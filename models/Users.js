const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user_schema = new Schema({
    first_name: {
        type: String,
        required: true
    },
    middle_name: String,
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        index: true,
        unique: true
    },
    admin: {
        type: Boolean,
        required: true
    },
    member: {
        type: Boolean,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const User = mongoose.model('user', user_schema);

module.exports = User;