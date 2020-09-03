let { Product, User } = require('../models');
const bcrypt = require('bcryptjs');

// mock data/users
function product_data() {
    console.log('<<-- Creating default products -->>');

    const product_one = new Product({
        _id: '1',
        seller_id: '1',
        title: 'Face Masks',
        seller: 'Kat Lee',
        description: 'Cover your face with these wonderful hand made face masks.',
        price: 8,
        rating: 5,
        img: 'https://i.etsystatic.com/22704767/r/il/8071d5/2532152175/il_794xN.2532152175_nwcn.jpg'
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
    const product_four = new Product({
        _id: '4',
        seller_id: '1',
        title: 'COVID-Love Face Masks',
        seller: 'Kat Lee',
        description: 'The couple who quarantines together, breaks up. Our face masks will always be there for you.',
        price: 10,
        rating: 5,
        img: 'https://i.etsystatic.com/6999701/d/il/c0a182/2498368087/il_340x270.2498368087_kc0b.jpg?version=0'
    });
    const product_five = new Product({
        _id: '5',
        seller_id: '1',
        title: 'Athletic Face Masks',
        seller: 'Kat Lee',
        description: 'Stylish face masks for the athletic mom.',
        price: 20,
        rating: 5,
        img: 'https://preview.thenewsmarket.com/Previews/ADID/StillAssets/640x480/563917.jpg'
    });
    const product_six = new Product({
        _id: '6',
        seller_id: '1',
        title: 'Gray Bandana Adult Face Mask',
        seller: 'Kat Lee',
        description: 'Look stylish while being protected.',
        price: 10,
        rating: 5,
        img: 'https://i.etsystatic.com/22772535/c/1583/1259/521/399/il/bf4b6c/2525940979/il_340x270.2525940979_kxyz.jpg'
    });
    const product_seven= new Product({
        _id: '7',
        seller_id: '2',
        title: 'Respect the Six Feet gloves',
        seller: 'Vance Weston',
        description: 'Washable and hypoallergenic courtesy gloves.',
        price: 10,
        rating: 5,
        img: 'https://i.etsystatic.com/20858268/r/il/2013fc/2393179601/il_794xN.2393179601_fock.jpg'
    });
    const product_eight= new Product({
        _id: '8',
        seller_id: '2',
        title: 'Cat Face Mask',
        seller: 'Vance Weston',
        description: 'No kitten...Wear a Mask.',
        price: 10,
        rating: 5,
        img: 'https://i.etsystatic.com/15634376/c/1457/1156/581/494/il/ea7b79/2436406393/il_340x270.2436406393_siln.jpg'
    });
    const product_nine= new Product({
        _id: '9',
        seller_id: '3',
        title: 'Hand Shit Hand Sanitizer Gel',
        seller: 'James Taylor',
        description: 'Never leave home without your Hand Shit.',
        price: 10,
        rating: 5,
        img: 'https://i.etsystatic.com/14693420/r/il/aab98d/2541478783/il_794xN.2541478783_73n0.jpg'
    });
    const product_ten= new Product({
        _id: '10',
        seller_id: '1',
        title: 'F*%$ Corona Face Mask',
        seller: 'Kat Lee',
        description: 'Protect Others While Giving Them the Middle Finger',
        price: 10,
        rating: 5,
        img: 'https://i.etsystatic.com/24269134/r/il/9b67ea/2513274503/il_794xN.2513274503_cdb9.jpg'
    });
    const product_eleven= new Product({
        _id: '11',
        seller_id: '3',
        title: 'Beard Face Mask',
        seller: 'James Taylor',
        description: 'For the Manliest of Men',
        price: 10,
        rating: 5,
        img: 'https://i.etsystatic.com/23165726/r/il/9d93c4/2321460662/il_794xN.2321460662_1r7z.jpg'
    });
     
    const save_promise_one = product_one.save();
    const save_promise_two = product_two.save();
    const save_promise_three = product_three.save();
    const save_promise_four = product_four.save();
    const save_promise_five = product_five.save();
    const save_promise_six = product_six.save();
    const save_promise_seven = product_seven.save();
    const save_promise_eight = product_eight.save();
    const save_promise_nine = product_nine.save();
    const save_promise_ten = product_ten.save();
    const save_promise_eleven = product_eleven.save();

    return Promise.all([save_promise_one, save_promise_two, save_promise_three, save_promise_four, save_promise_five, save_promise_six, 
        save_promise_seven, save_promise_eight, save_promise_nine, save_promise_ten, save_promise_eleven])
        .then(() => console.log('Default products added to database'))
        .catch(() => console.log('Default products already exist in your database'));
}

async function user_data() {
    console.log('<<-- Creating Users for database -->>');
    await user_one();
    await user_two();
    await user_three();
}

function user_one() {

    const user_one = new User({
        _id: '2',
        first_name: 'Vance',
        last_name: 'Weston',
        email: 'vweston@student.neumont.edu',
        admin: true,
        member: true,
        password: 'Henry.2018'
    });

    // Hash Password
    bcrypt.genSalt(10, (err, salt) => 
        bcrypt.hash(user_one.password, salt, (err, hash) => {
            if(err) throw err;
            // Set password to hashed
            user_one.password = hash;
            // Save User
            user_one.save()
            .then(console.log('User One created'))
            .catch(console.log('User One Already Exists'));
    }))
}

function user_two() {

    const user_two = new User({
        _id: '1',
        first_name: 'Kat',
        last_name: 'Lee',
        email: 'kalee@student.neumont.edu',
        admin: true,
        member: true,
        password: 'PugMaster.123'
    });

    // Hash Password
    bcrypt.genSalt(10, (err, salt) => 
        bcrypt.hash(user_two.password, salt, (err, hash) => {
            if(err) throw err;
            // Set password to hashed
            user_two.password = hash;
            // Save User
            user_two.save()
            .then(console.log('User Two created'))
            .catch(console.log('User Two Already Exists'));
    }))
}

function user_three() {

    const user_three = new User({
        _id: '3',
        first_name: 'James',
        last_name: 'Taylor',
        email: 'jtaylor@student.neumont.edu',
        admin: true,
        member: true,
        password: 'thebe4art'
    });

    // Hash Password
    bcrypt.genSalt(10, (err, salt) => 
        bcrypt.hash(user_three.password, salt, (err, hash) => {
            if(err) throw err;
            // Set password to hashed
            user_three.password = hash;
            // Save User
            user_three.save()
            .then(console.log('User Three created'))
            .catch(console.log('User Three Already Exists'));
    }))
}

const setupDefaultData = async () => {
    await product_data();
    await user_data();
};

module.exports = setupDefaultData;