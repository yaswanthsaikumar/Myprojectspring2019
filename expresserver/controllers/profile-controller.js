const { User } = require('./../models/user');

function signUp(req, res) {
  if (req.body.email
    && req.body.username
    && req.body.password) {
    const userData = {
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
    };

    // TODO: Need to add a check for existing customer.

    User.create(userData, (error, user) => {
      if (error) {
        res.status(500).json({
          message: 'error occured while creating user.',
        });
      }
      req.session.userId = user._id;
      return res.json({
        success: true,
      });
    });
  } else {
    res.status(400).json({
      message: 'All fields required.',
    });
  }
}

function signIn(req, res) {
  if (req.body.logemail && req.body.logpassword) {
    User.authenticate(req.body.logemail, req.body.logpassword, (error, user) => {
      if (error || !user) {
        res.status(401).json({
          message: 'Wrong email or password.',
        });
      }
      req.session.userId = user._id;
      return res.json({
        success: true,
      });
    });
  } else {
    res.status(400).json({
      message: 'All fields required.',
    });
  }
}

function signOut(req, res) {
  if (req.session) {
    // delete session object
    req.session.destroy((err) => {
      if (err) {
        res.status(500).json({
          message: 'error occured during logout.',
        });
      }
      return res.json({
        success: true,
      });
    });
  }
}

module.exports = {
  signUp,
  signIn,
  signOut,
};