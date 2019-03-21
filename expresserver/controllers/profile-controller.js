const User = require('./../models/user');

const signUp = (req, res, next) => {

    if (req.body.email &&
        req.body.username &&
        req.body.password) {

        var userData = {
          email: req.body.email,
          username: req.body.username,
          password: req.body.password,
        }

        // TODO: Need to add a check for existing customer.

        User.create(userData, function (error, user) {
          if (error) {
            return next(error);
          } else {
            req.session.userId = user._id;
            return res.json({
              success: true
            });
          }
        });

      } else {
        var err = new Error('All fields required.');
        err.status = 400;
        return next(err);
      }
}

module.exports = {
    signUp
}