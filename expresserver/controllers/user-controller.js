const {
    User,
  } = require('./../models/user');

  function getUserDetails() {
    throw new Error('not implemented');
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