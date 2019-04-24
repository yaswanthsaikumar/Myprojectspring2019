const profileRoute = require('./profile-route');
const exerciseRoute = require('./exercise-route');
const dietRoute = require('./diet-route');
const statmessageRoute = require('./statmessage-route');
const getUsers = require('./user-route');

const rootRouter = (app) => {
  profileRoute(app);
  exerciseRoute(app);
  dietRoute(app);
  statmessageRoute(app);
  getUsers(app);
};

module.exports = rootRouter;
