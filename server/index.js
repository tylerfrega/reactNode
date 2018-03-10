const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
require('./models/User');
require('./services/passport');



const app = express();

app.use(
    cookieSession({
        maxAge: 30 * 24 *60 * 100, //cookie lasts for 30 days (in milliseconds)
        keys: [keys.cookieKey]
    })      
)

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

mongoose.connect(keys.mongoURI);




const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log('listening...')); 