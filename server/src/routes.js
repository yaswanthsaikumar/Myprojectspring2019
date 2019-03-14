const AuthenticationController = require('./validation/Authenticationcontroler')

const AuthenticationControllerPolicy = require('./validation/Authenticationcontrolpolicy')
module.exports = (app) => {
    app.post('/Register',
      AuthenticationControllerPolicy.register,
      AuthenticationController.register)

      app.post('/login',
      AuthenticationController.login)

  }
