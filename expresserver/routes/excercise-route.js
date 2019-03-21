const {
    addExcercise,
    deleteExcercise,
  } = require('./../controllers/excercise-controller');
  const requiresLogin = require('./../middlewares/requires-login');

  const excerciseRoute = (app) => {
    app.use('/excercise', requiresLogin);
    app.route('/excercise/add')
      .post(addExcercise);
    app.route('/excercise/delete/:id')
      .get(deleteExcercise);
  };

  module.exports = excerciseRoute;
