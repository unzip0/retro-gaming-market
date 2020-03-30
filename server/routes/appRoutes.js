'use strict';

module.exports = function(app) {
  var controller = require('../controllers/appController');

  // controller Routes
    app.route('/users')
        .get(controller.list_all_users);
    // .post(todoList.loginUser);
    app.route('/login')
        .post(controller.login_user)
   
};