const {User} = require('../models');

const UserData =[
    {
        name: 'Jimmy',
        email: 'jrrdoe@email.com',
        password: 'password123'
    },
    {
        name: 'jamie',
        email: 'pmdoe@email.com',
        password: 'password1234'
    },
    {
        name: 'abc',
        email: 'abc@email.com',
        password: 'abc'
    },


];

const UserInfo = () => User.bulkCreate(UserData, {individualHooks:true, returning: true});

module.exports = UserInfo;