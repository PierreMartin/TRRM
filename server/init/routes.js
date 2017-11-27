import passport from 'passport';
import unsupportedMessage from '../db/unsupportedMessage';
import { controllers, passport as passportConfig } from '../db';

const usersController = controllers && controllers.users;
const topicsController = controllers && controllers.topics;

export default (app) => {
  // user routes
  if (usersController) {
    app.post('/sessions', usersController.login);
    app.post('/users', usersController.signUp);
    app.delete('/sessions', usersController.logout);
  } else {
    console.warn(unsupportedMessage('users routes'));
  }

  /*
  if (passportConfig && passportConfig.google) {
    app.get('/auth/google', passport.authenticate('google', {
      scope: [
        'https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/userinfo.email'
      ]
    }));

    app.get('/auth/google/callback',
      passport.authenticate('google', {
        successRedirect: '/',
        failureRedirect: '/login'
      })
    );
  }
  */

  // topic routes
  if (topicsController) {
    app.get('/topic', topicsController.all);
    app.post('/topic/:id', topicsController.add);
    app.put('/topic/:id', topicsController.update);
    app.delete('/topic/:id', topicsController.remove);
  } else {
    console.warn(unsupportedMessage('topics routes'));
  }
};
