const db = require("../models");
const bcrypt = require('bcryptjs');
const User = db.users;
// const Op = db.Sequelize.Op;


// Login User
exports.login = (req, res) => {
    if (!req.body.username || !req.body.password){
        res.status(400).send({ error: true, message: 'Provide credentials'});
        return;
    }

    User.findOne({ 
        where: { user_name: `${req.body.username}` },
        attributes: ['id', 'password', 'email', 'first_name', 'last_name', 'user_name', 'profile_picture', 'phone'] 
    })
    .then(data => {
        bcrypt.compare(req.body.password, data.password, function(err, hash){
            if (err){
                res.status(500).send({
                    message: err || 'Compare password error'
                })
            }else{
                if (hash){
                    res.send(data);
                }else{
                    res.status(500).send({
                        message: 'Constraseña incorrecta'
                    })
                }
            }
        }); 
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || 'Error interno del servidor'
        })
    });
};

// Update a User by the id in the request
exports.update = (req, res) => {
  
};
