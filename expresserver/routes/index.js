const profileRoute = require('./profile-route');
const excerciseRoute = require('./excercise-route');

const rootRouter = (app) => {
    profileRoute(app);
    excerciseRoute(app);
}

module.exports = rootRouter;