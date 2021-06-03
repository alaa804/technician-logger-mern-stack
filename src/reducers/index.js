import { combineReducers } from 'redux';
import logReducers from './logReducer';
import techReducers from './techReducer';

export default combineReducers({
   log: logReducers,
   tech : techReducers
});