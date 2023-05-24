import {combineReducers} from 'redux';
import AllPostReducer from './reducer-Allpost';

const rootReducer=combineReducers({
    allPosts:AllPostReducer,
  
})

export default rootReducer;