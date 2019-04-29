const {
  getUser,
} = require('./profile-controller');
const {
  getUserDetailsWithoutAuth,
} = require('./user-controller');
const { StatMessage } = require('../models/statMessage');

async function shareStatus(req, res) {
  try {
    const fromUser = await getUser(req.session.userId);
    const statMessage = new StatMessage({
      from: fromUser.username,
      exerciseLog: fromUser.exerciseLog,
      dietLog: fromUser.dietLog,
    });
    const toUser = await getUserDetailsWithoutAuth(req.body.to);
    toUser.statMessages.push(statMessage);
    toUser.save();
    res.json({
      success: true,
    });
  } catch (err) {
    console.log(err);
    res.status().json({
      message: 'an error occured while sharing stats',
    });
  }
}

module.exports = {
  shareStatus,
};
