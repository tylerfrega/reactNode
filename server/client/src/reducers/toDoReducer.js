import { GET_TODOS } from '../actions/types';
import { ADD_TODO } from '../actions/types';


export default function(state = null, action){
    switch (action.type){
        case GET_TODOS:{
            return action.payload; 
        }
        case ADD_TODO:{
            return action.payload; 
        }
        default:
            return state;
    }
}