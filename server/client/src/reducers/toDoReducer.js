import { GET_TODOS } from '../actions/types';

export default function(state = null, action){
    switch (action.type){
        case GET_TODOS:{
            return action.payload; 
        }
        default:
            return state;
    }
}