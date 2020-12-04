const db = require("../models");
const Product = db.products;



exports.filter = (req, res) => {
    if (!req.body.product){
        res.status(400).send({ error: true, message: 'Provide product'});
        return;
    }

    Product.findAll({
        where: {
            name : {
                $like: `%${ req.body.product }%`
            }
        }
    })
    .then(data =>{
        console.log(data);
        res.send(data);
    })
    .catch(err => {
        console.log(err);
    });
    
}