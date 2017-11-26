import { combineReducers } from 'redux';
import cats from './catReducer';

const rootReducer = combineReducers({
	// short hand property names ('cats', instead of 'cats: cats')
	cats
});

export default rootReducer;
