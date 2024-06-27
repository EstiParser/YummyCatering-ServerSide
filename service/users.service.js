const Users = require('../models/Users');

const getUsers = async () => {
    const users = await Users.find();
    return users;
};

module.exports = {
    getUsers
};
