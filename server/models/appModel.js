'use strict';
const sql = require('./db.js');
const bcrypt = require('bcryptjs');

sql.connect(function(err) {
    if (err) throw err;
});

var User = function(user){
    this.user = user.user;
}

User.getUsers = function (result){
    sql.query("SELECT * FROM sysusers", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log('QUERY RES', res);
            result(null, res);
        }
    });
}

User.login = function (username, password, result){
    sql.query('SELECT id, user_name, email, password FROM sysusers WHERE user_name = ?', [username], function(err, res) {
        if (err){
            console.log("error login: ", err);
            result(err, null);
        }else{
            this.user = res[0];
            bcrypt.compare(password, this.user.password, function(err, hash){
                if (err){
                    console.log("error login: ", err);
                    result(err, null);
                }else{
                    if (hash){
                        delete res[0].password;
                        result(null, res[0]);
                    }else{
                        result('Password incorrecta',null);
                    }
                }
            }); 
        }
    });
}

User.getProducts = function (product = null, result){
    product = '%' + product + '%';
    sql.query("SELECT name, DATE_FORMAT(release_date, '%d/%m/%Y') as release_date, platform, region, apporgproductimages.image_path, apporgproducts.id FROM apporgproducts INNER JOIN apporgproductimages ON product_id = apporgproducts.id WHERE name LIKE ?", product, function (err, res){
        // sql.query("SELECT name, DATE_FORMAT(release_date, '%d/%m/%Y') as release_date, platform, region, apporgproductimages.image_path, apporgproducts.id FROM apporgproducts INNER JOIN apporgproductimages ON product_id = apporgproducts.id", function (err, res){
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log('QUERY RES', res);
            result(null, res);
        }
    });
}

module.exports = User;