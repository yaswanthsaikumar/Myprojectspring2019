const {
  getUsers,
  getUserDetails,
} = require('./../controllers/user-controller');
const requiresLogin = require('../middlewares/requires-login');

const userRoute = (app) => {
  app.route('/user/:q')
    .get(getUsers);
  app.use('/user/auth', requiresLogin);
  app.route('/user/auth/details')
    .get(getUserDetails);
};

module.exports = userRoute;
