const profileRoute = require('./profile-route');

const rootRouter = (app) => {
    profileRoute(app);
}

module.exports = rootRouter;