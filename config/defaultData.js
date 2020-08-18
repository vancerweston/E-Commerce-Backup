let { Product, User } = require('../models');

// mock data/users
function product_data() {
    console.log('<<-- Creating default products -->>');

    const product_one = new Product({
        _id: '1',
        seller_id: '1',
        title: 'Face Mask',
        seller: 'Kat Lee',
        description: 'Cover your face with these wonderful hand made face masks.',
        price: 8,
        rating: 5,
        img: 'https://www.al.com/resizer/wC9swhdipolXrcYluE_O8B212iA=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/BYMAZ4PXUFGLLAQYXXDKXWLGLY.JPG'
    });
    const product_two = new Product({
        _id: '2',
        seller_id: '2',
        title: 'Latex Gloves',
        seller: 'Vance Weston',
        description: 'Never touch germs again with these great gloves.',
        price: 10,
        rating: 4,
        img: 'https://contestimg.wish.com/api/webimage/5e9532dfab41ab1a64cfd135-large.jpg?cache_buster=8f61be9bcff5bd60714d87fc23b758e7'
    });
    const product_three = new Product({
        _id: '3',
        seller_id: '3',
        title: 'Hand Sanitizer',
        seller: 'James Taylor',
        description: 'Nothing kills germs better than our hand sanitizer.',
        price: 5,
        rating: 5,
        img: 'https://b3h2.scene7.com/is/image/BedBathandBeyond/7518112555423p?$690$&wid=690&hei=690'
    });

    const save_promise_one = product_one.save();
    const save_promise_two = product_two.save();
    const save_promise_three = product_three.save();
    return Promise.all([save_promise_one, save_promise_two, save_promise_three])
        .then(() => console.log('Default products added to database'))
        .catch(() => console.log('Default products already exist in your database'));
}

function user_data() {
    console.log('<<-- Creating Users for database -->>');

    const user_one = new User({
        first_name: 'Vance',
        middle_name: 'Superman',
        last_name: 'Weston',
        email: 'vweston@student.neumont.edu',
        admin: true,
        member: true,
        password: 'Henry.2018'
    });
    const user_two = new User({
        first_name: 'Kat',
        middle_name: 'Ninja',
        last_name: 'Lee',
        email: 'kalee@student.neumont.edu',
        admin: true,
        member: true,
        password: 'PugMaster.123'
    });
    const user_three = new User({
        first_name: 'James',
        middle_name: 'Thabiso',
        last_name: 'Taylor',
        email: 'jtaylor@student.neumont.edu',
        admin: true,
        member: true,
        password: 'thebe4art'
    });

    const save_promise_one = user_one.save();
    const save_promise_two = user_two.save();
    const save_promise_three = user_three.save();
    return Promise.all([save_promise_one, save_promise_two, save_promise_three])
        .then(() => console.log('Default users added to database'))
        .catch(() => console.log('Default users already exist in your database'));
}

const setupDefaultData = async () => {
    await product_data();
    await user_data();
};

module.exports = setupDefaultData;