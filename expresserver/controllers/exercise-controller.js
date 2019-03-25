const {
  getUser,
} = require('./profile-controller');

function addExercise(req, res) {
  getUser(req.session.userId)
    .then((user) => {
      const exercise = {
        type: req.body.type,
        duration: req.body.duration,
      };
      user.excerciseLog.push(exercise);
      user.save((err) => {
        if (err) {
          return res.status(500).json({
            message: 'error occured while adding exercise.',
          });
        }
        res.json(user);
      });
    })
    .catch(() => {
      res.status(500).json({
        message: 'an error occured while adding exercise',
      });
    });
}

function deleteExercise() {
  throw new Error('not implemented');
}

module.exports = {
  addExercise,
  deleteExercise,
};