const { sequelize } = require("../models");
const db = require("../models");
const Product = db.products;
const ProductImage = db.product_images;


exports.filter = (req, res) => {
    if (!req.body.product){
        res.status(400).send({ error: true, message: 'Provide product'});
        return;
    }

    Product.findAll({
        attributes: ['id', 'name', 'release_date', 'platform', 'region', [sequelize.col('apporgproductimage.image_path'), 'image_path']],
        where: {
            name : {
                $like: `%${ req.body.product }%`
            }
        },
        include: [{model: ProductImage,  attributes: []}],
        raw: true

    })
    .then(data =>{
        res.send(data);
    })
    .catch(err => {
        console.log(err);
    });
    // sql.query("SELECT name, DATE_FORMAT(release_date, '%d/%m/%Y') as release_date, platform, region, apporgproductimages.image_path, apporgproducts.id FROM apporgproducts INNER JOIN apporgproductimages ON product_id = apporgproducts.id WHERE name LIKE ?", product, function (err, res){
    //     // sql.query("SELECT name, DATE_FORMAT(release_date, '%d/%m/%Y') as release_date, platform, region, apporgproductimages.image_path, apporgproducts.id FROM apporgproducts INNER JOIN apporgproductimages ON product_id = apporgproducts.id", function (err, res){
    //     if(err) {
    //         console.log("error: ", err);
    //         result(err, null);
    //     }
    //     else{
    //         console.log('QUERY RES', res);
    //         result(null, res);
    //     }
    // });
}