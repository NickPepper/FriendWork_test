import { combineReducers } from 'redux';
import data from './datatablesReducer';

const rootReducer = combineReducers({
    // short hand property names ('data', instead of 'data: data')
    data
});

export default rootReducer;
