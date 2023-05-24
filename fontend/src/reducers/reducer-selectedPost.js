import {SELECT_APOIMENT} from '../actions/types';

export default function (state=null,action){
    switch(action.type){
        case SELECT_APOIMENT:
            return action.payload;
            break;

    }
    return state
}