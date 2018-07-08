const controller = require('../controllers/todoController')
//const router = express.Router();


module.exports = app => {

app.get('/api/getTodoList', (req, res) => {
    console.log('hit todo endpoint')
    controller.getTodos(req, res)
   //res.send('hello')
});

app.post('/api/addTodo', (req, res) => {
    console.log('hit add endpoint')
    //controller.addTodo(req, res)
   //res.send('hello')
});

}
