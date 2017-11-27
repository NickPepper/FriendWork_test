import { combineReducers } from 'redux';
import cats from './catReducer';
import hobbies from './hobbyReducer';

const rootReducer = combineReducers({
	// short hand property names ('cats', instead of 'cats: cats')
	cats,
	hobbies
});

export default rootReducer;
