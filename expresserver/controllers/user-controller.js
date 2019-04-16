const {
  User,
} = require('./../models/user');

function getUserDetails(req, res) {
  const userId = req.session && req.session.userId;
  if (userId) {
    User.findById(userId).then((user) => {
      const {
        password,
        ...userWithoutPassword
      } = user.toObject();
      res.json(userWithoutPassword);
    });
    return;
  }
  return res.status(500).json({
    message: 'Error occured while fetching user details.',
  });
}

function getUsers(req, res) {
  const { q: query } = req.params;
  User.find({
    username: {
      $regex: `(.)*(${query})(.)*`,
    },
  }).then((users) => {
    if (!users) {
      return res.json([]);
    }
    const trimmedUsers = users.map(({ _id, username }) => ({
      _id,
      username,
    }));
    res.json(trimmedUsers);
  });
}

module.exports = {
  getUserDetails,
  getUsers,
};
