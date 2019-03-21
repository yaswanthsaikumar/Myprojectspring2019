const {
    signUp
} = require('./../controllers/profile-controller');

const profileRoute = (app) => {
    app.route('/profile/signup')
        .post(signUp);
};

module.exports = profileRoute;