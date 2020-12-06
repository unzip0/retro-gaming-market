module.exports = app => { 
    const products = require('../controllers/product.controller.js');
    var router = require('express').Router();

    //filter
    router.post('/filter', products.filter);

    app.use('/api/products', router);
};