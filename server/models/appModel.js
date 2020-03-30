'use strict';

var sql = require('./db.js');
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
    sql.query('SELECT * FROM sysusers WHERE user_name = ? AND password = ?', [username, password], function(err, res) {
        if (err){
            console.log("error login: ", err);
            result(err, null);
        }else{
            console.log('QUERY', res);
            result(null, res);
        }
    })
}

module.exports = User;