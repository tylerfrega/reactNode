import { FETCH_USER } from '../actions/types';

export default function(state = null, action){
    switch (action.type){
        case FETCH_USER:{
            //if db does not return user
            //return false (instead of empty string)
            return action.payload || false; 
        }
        default:
            return state;
    }
}