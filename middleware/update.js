const { Product, User } = require("../models/index");

// CRUD update functionality
function update_user_info() { 
    let falseEmail = User.find({email: 'klee@student.neumont.edu'});

    if (falseEmail.value) {
        User.updateOne({email: 'klee@student.neumont.edu'}, { email: 'kalee@student.neumont.edu'}, function(err, res) {
            if (err) return handleError(err);
            console.log("Update User: User email updated");
        });
    } else {
        console.log('Update User: This User does not exist in the database');
    }
}

module.exports = update_user_info;