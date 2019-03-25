const {
    addConnection,
  } = require('./../controllers/connections-controller');
  const requiresLogin = require('../middlewares/requires-login');

  const connectionsRoute = (app) => {
    app.use('/connections', requiresLogin);
    app.route('/connections/add')
      .post(addConnection);
  };

  module.exports = connectionsRoute;