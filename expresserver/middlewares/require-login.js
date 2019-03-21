function requiresLogin(req, res, next) {
    if (req.session && req.session.userId) {
      return next();
    }
    res.status(401).json({
      message: 'You must be logged in to perform this action.',
    });
  }

  module.exports = requiresLogin;
