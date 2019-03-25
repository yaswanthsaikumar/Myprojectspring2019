const {
    getUsers,
  } = require('./../controllers/user-controller');

  const userRoute = (app) => {
    app.route('/user/:q')
      .get(getUsers);
  };

  module.exports = userRoute;