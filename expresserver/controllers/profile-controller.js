const { User } = require('./../models/user');

function getUser(id) {
  return User.findById(id);
}

function signUp(req, res) {
  if (req.body.email
    && req.body.username
    && req.body.password) {
    const userData = {
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
      age: req.body.age,
      weight: req.body.weight,
      height: req.body.height,
    };

    // TODO: Need to add a check for existing customer.

    User.create(userData, (error, user) => {
      if (error) {
        return res.status(500).json({
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

async function signIn(req, res) {
  try {
    if (req.body.logemail && req.body.logpassword) {
      const user = await User.authenticate(req.body.logemail, req.body.logpassword);
      if (!user) {
        return res.status(401).json({
          message: 'Wrong email or password.',
        });
      }
      req.session.userId = user._id;
      return res.json({
        success: true,
      });
    }
    return res.status().json({
      message: 'All fields are required.',
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'unable to login',
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
  getUser,
  signUp,
  signIn,
  signOut,
};
