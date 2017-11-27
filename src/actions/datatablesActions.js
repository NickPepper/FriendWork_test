import * as types from './actionTypes';
import Api from '../api/datatablesApi';


export function loadData() {  
 	return function(dispatch) {
    	return Api.getDatatablesData().then(data => {
    		dispatch(loadDataSuccess(data));
    	}).catch(error => {
    		throw(error);
    	});
	};
}

export function loadDataSuccess(data) {  
	return {type: types.LOAD_DATA_SUCCESS, data};
}
