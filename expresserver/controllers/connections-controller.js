const {
  getUser,
} = require('./profile-controller');

function addConnection(req, res) {
  getUser(req.session.userId)
    .then((user) => {
      const connection = req.body.id;
      user.connections.push(connection);
      user.save((err) => {
        if (err) {
          return res.status(500).json({
            message: 'an error occured while adding connection',
          });
        }
        res.json(user);
      });
    })
    .catch(() => {
      res.status(500).json({
        message: 'an error occured while adding connection',
      });
    });
}

function shareStatus() {
  throw new Error('not implemented');
}

module.exports = {
  addConnection,
  shareStatus,
};
