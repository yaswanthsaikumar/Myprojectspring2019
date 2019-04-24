const {
  shareStatus,
} = require('./../controllers/statmessage-controller');
const requiresLogin = require('../middlewares/requires-login');

const statmessageRoute = (app) => {
  app.use('/statmessage', requiresLogin);
  app.route('/statmessage/share')
    .post(shareStatus);
};

module.exports = statmessageRoute;
