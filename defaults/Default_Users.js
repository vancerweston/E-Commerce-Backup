const user = require('../models/Users');
const { use } = require('../routes');

default_admin = new user({
    id: user.id,
    first_name: user.first_name,
    middle_name: user.middle_name,
    last_name: user.last_name,
    email: user.email,
    admin: user.admin,
    member: user.member,
    password: user.password
}); 

default_admin02 = new user({
    first_name: 'Kat',
    middle_name: 'Ninja',
    last_name: 'Lee',
    email: 'katlee@student.neumont.edu',
    admin: true,
    member: true,
    password: 'flowergirl'
});

default_admin03 = new user({
    email: 'vweston@student.neumont.edu',
    first_name: 'Vance',
    middle_name: 'Superman',
    last_name: 'Weston',
    member: true,
    password: 'CoolMan',
    admin: true
});

default_admin04 = new user({
    email: 'ctayor@student.neumont.edu',
    first_name: 'James',
    middle_name: 'Coy',
    last_name: 'Taylor',
    member: true,
    password: 'CoolSuperHero',
    admin: true
});

module.exports = {
    default_admin,
    default_admin02,
    default_admin04,
    default_admin03
}




