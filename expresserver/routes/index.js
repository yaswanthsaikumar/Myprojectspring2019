const profileRoute = require('./profile-route');
const exerciseRoute = require('./exercise-route');

const rootRouter = (app) => {
  profileRoute(app);
  exerciseRoute(app);
};

module.exports = rootRouter;