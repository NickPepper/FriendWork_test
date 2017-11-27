import * as types from './actionTypes';
import catApi from '../api/catApi';


export function loadCats() {  
 	return function(dispatch) {
    	return catApi.getAllCats().then(cats => {
    		dispatch(loadCatsSuccess(cats));
    	}).catch(error => {
    		throw(error);
    	});
	};
}

export function loadCatsSuccess(cats) {  
	return {type: types.LOAD_CATS_SUCCESS, cats};
}


export function updateCat(cat) {
	return function (dispatch) {
	    return catApi.updateCat(cat).then(responseCat => {
	    	dispatch(updateCatSuccess(responseCat));
	    }).catch(error => {
	    	throw(error);
	    });
	};
}

export function updateCatSuccess(cat) {
	return {type: types.UPDATE_CAT_SUCCESS, cat}
}
