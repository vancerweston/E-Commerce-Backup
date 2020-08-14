const { Product, User } = require("../models/index");

// CRUD delete functionality
function delete_extra_data() { 
    Product.deleteOne({_id: 4}, function(err) {
        if (err) return handleError(err);
        console.log("Delete Product: Test Product deleted");
    });
}

module.exports = delete_extra_data;