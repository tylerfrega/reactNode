import axios from 'axios';
import { FETCH_USER } from './types';
import { GET_TODOS } from './types';


export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/currentUser');
    console.log('res', res.data);
    dispatch({ type: FETCH_USER, payload: res.data });
};

export const getTodos = () => dispatch =>{
    console.log('the test has been fired');
    dispatch({ type: GET_TODOS, payload: ['booob', 'glip glops', 'boogins'] });

};