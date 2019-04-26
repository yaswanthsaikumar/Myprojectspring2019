const {
  signUp,
  signIn,
  signOut,
} = require('./../controllers/profile-controller');

const profileRoute = (app) => {
  app.route('/profile/signup')
    .post(signUp);
  app.route('/profile/signin')
    .post(signIn);
  app.route('/profile/signout')
    .get(signOut);
};

module.exports = profileRoute;
