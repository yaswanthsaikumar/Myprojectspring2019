const {
  User,
} = require('./../models/user');

async function getAuthUserDetails(req, res) {
  const userId = req.session && req.session.userId;
  if (userId) {
    const user = await User.findById(userId);
    const {
      password,
      ...userWithoutPassword
    } = user.toObject();
    res.json(userWithoutPassword);
  } else {
    return res.status(500).json({
      message: 'Error occured while fetching user details.',
    });
  }
}

async function getUserDetailsWithoutAuth(id) {
  const user = await User.findById(id);
  return user;
}

async function updateAuthUserDetails(req, res) {
  const userId = req.session && req.session.userId;
  if (userId) {
    const user = await User.findById(userId);
    ['age', 'height', 'weight'].forEach((prop) => {
      if (req.body[prop]) {
        user[prop] = req.body[prop];
      }
    });
    await user.save();
    res.json({
      succes: true,
    });
  } else {
    return res.status(500).json({
      message: 'an error occured while updating the user details',
    });
  }
}

async function getUsers(req, res) {
  const { q: query } = req.params;
  const users = await User.find({
    username: {
      $regex: `(.)*(${query})(.)*`,
    },
  });
  if (!users) {
    return res.json([]);
  }
  const trimmedUsers = users.map(({ _id, username }) => ({
    _id,
    username,
  }));
  res.json(trimmedUsers);
}

module.exports = {
  getAuthUserDetails,
  getUserDetailsWithoutAuth,
  getUsers,
  updateAuthUserDetails,
};
