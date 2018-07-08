import axios from 'axios';
import { FETCH_USER } from './types';
import { GET_TODOS } from './types';
import { ADD_TODO } from './types';


export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/currentUser');
    dispatch({ type: FETCH_USER, payload: res.data });
};

export const getTodos = () => async dispatch =>{
    console.log('........ran')
    const res = await axios.get('/api/getTodoList')
    dispatch({ type: GET_TODOS, payload: [] });

};

export const addTodo = () =>  dispatch =>{
    //const res = await axios.get('/api/getTodoList')
    dispatch({ type: ADD_TODO, payload: [] });

};