const {
  addExercise,
  deleteExercise,
} = require('./../controllers/exercise-controller');
const requiresLogin = require('../middlewares/requires-login');

const exerciseRoute = (app) => {
  app.use('/excercise', requiresLogin);
  app.route('/exercise/add')
    .post(addExercise);
  app.route('/exercise/delete/:id')
    .get(deleteExercise);
};

module.exports = exerciseRoute;
