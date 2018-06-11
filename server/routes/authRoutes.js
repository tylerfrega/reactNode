//passport requests user info and returns an auth token 
const passport = require('passport');

module.exports = app => {

    app.get('/auth/google',
        passport.authenticate('google', {
            scope: ['profile', 'email']
        })
    );

    //passport passes auth token to google strategy, authenticates and passes user info
    app.get('/auth/google/callback', 
        passport.authenticate('google'),
        (req,res) => {
            res.redirect('/todoList');
        }
    );

    app.get('/api/logout', (req, res) => {
        req.logout();
        res.redirect('/')
    });

    app.get('/api/currentUser', (req, res) => {
        res.send(req.user);
        console.log(req.user);
    });

}