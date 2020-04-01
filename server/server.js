
const express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  port = process.env.PORT || 3000;
const cors = require('cors');
// const sql = require('./models/db.js');

// sql.connect(function(err) {
//     if (err) throw err;
// });
app.listen(port);
console.log('todo list RESTful API server started on: ' + port);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./routes/appRoutes');
routes(app);