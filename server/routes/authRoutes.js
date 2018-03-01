//passport requests user info and returns an auth token 
const passport = require('passport');

module.exports = app => {

    app.get('/auth/google',
        passport.authenticate('google', {
            scope: ['profile', 'email']
        })
    );

    //passport passes auth token to google strategy and authenticates and passes urer info
    app.get('/auth/google/callback', passport.authenticate('google'))

}