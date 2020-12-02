var User = require('../models/appModel.js');

exports.list_all_users = function(req, res) {
    User.getUsers(function(err, users){
        console.log('list_all_users');
        if (err){
            res.send(err);
        }
        console.log('res', users);
        res.send(users);
    });
};

exports.login_user = function(req, res) {
    if (!req.body.username || !req.body.password){
        res.status(400).send({ error: true, message: 'Provide credentials'});
        return false;
    }
    User.login(req.body.username, req.body.password, function(err, user){
        console.log('login_user');
        console.log('username', req.body.username);
        if (err){
            res.send(err);
        }
        console.log('res', user);
        res.send(user);
    });
};

exports.get_all_products = function(req, res) {
    if (!req.body.product){
        res.status(400).send({ error: true, message: 'Provide product'});
        return false;
    }
    User.getProducts(req.body.product, function(err, users){
        console.log('get_all_products');
        if (err){
            res.send(err);
        }
        console.log('res', users);
        res.send(users);
    });
};