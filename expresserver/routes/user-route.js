const {
  getUsers,
  getAuthUserDetails,
  updateAuthUserDetails,
} = require('./../controllers/user-controller');
const requiresLogin = require('../middlewares/requires-login');

const userRoute = (app) => {
  app.route('/user/:q')
    .get(getUsers);
  app.use('/user/auth', requiresLogin);
  app.route('/user/auth/details')
    .get(getAuthUserDetails);
  app.route('/user/auth/updateDetails')
    .post(updateAuthUserDetails);
};

module.exports = userRoute;
