module.exports = app => { 
    const users = require('../controllers/user.controller.js');
    var router = require('express').Router();

    //login
    router.post('/login', users.login);

    app.use('/api/users', router);
};