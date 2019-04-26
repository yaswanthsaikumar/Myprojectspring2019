const {
  getUser,
} = require('./profile-controller');

function addDiet(req, res) {
  getUser(req.session.userId)
    .then((user) => {
      const diet = {
        name: req.body.name,
        quantity: req.body.quantity,
      };
      user.dietLog.push(diet);
      user.save((err) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            message: 'error occured while adding diet.',
          });
        }
        res.json(user);
      });
    })
    .catch(() => {
      res.status(500).json({
        message: 'an error occured while adding diet',
      });
    });
}

module.exports = {
  addDiet,
};
