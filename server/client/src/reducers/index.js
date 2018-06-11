import { combineReducers } from 'redux';
import authReducer from './authReducer';
import toDoReducer from './toDoReducer';


export default combineReducers({
    auth: authReducer,
    todoList: toDoReducer
})