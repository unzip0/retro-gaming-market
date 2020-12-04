
const express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  port = process.env.PORT || 3000;
const cors = require('cors');

app.use(cors());
app.listen(port);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./routes/user.routes')(app);
require('./routes/product.routes')(app);
const db = require('./models');

db.sequelize.sync();

// db.sequelize.sync({ force: true }).then(() => { //development to drop existing taqbles and resync db
//   console.log("Drop and re-sync db.");
// });

