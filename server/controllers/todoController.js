const mongoose = require('mongoose');

//const db = require('../models');

const User = mongoose.model('users');

const Todo = mongoose.model('todo');


module.exports = {

    getTodos: (req, res) => {
        //console.log(db)
        // /console.log(User)
        const userId = req.user.id;
        User.findOne({ _id: userId }, 'todos')
            .then(res => { console.log(res.todos, 'resss')})
            
            
            }
           

}