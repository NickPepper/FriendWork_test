import * as types from './actionTypes';
import hobbyApi from '../api/hobbyApi';


export function loadHobbies() {
	return function(dispatch) {
	    return hobbyApi.getAllHobbies().then(hobbies => {
	    	dispatch(loadHobbiesSuccess(hobbies));
	    }).catch(error => {
	    	throw(error);
	    });
	};
}

export function loadHobbiesSuccess(hobbies) {
	return {type: types.LOAD_HOBBIES_SUCCESS, hobbies};
}
