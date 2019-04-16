const {
  User,
} = require('./../models/user');

function getUserDetails(req, res) {
  if (req.session && req.session.userId) {
    return res.send('TODO:// Need to query the user');
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
