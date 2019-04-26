const {
  addDiet,
} = require('./../controllers/diet-controller');
const requiresLogin = require('../middlewares/requires-login');

const dietRoute = (app) => {
  app.use('/diet', requiresLogin);
  app.route('/diet/add')
    .post(addDiet);
};

module.exports = dietRoute;
