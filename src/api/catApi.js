let mock = [
	{
		id: 1, 
		name: "Moe", 
		weight: "heavy", 
		temperament: "protective", 
		hobby_ids: [1, 2]
	},
	{
		id: 2, 
		name: "Mini", 
		weight: "heavy", 
		temperament: "sweet", 
		hobby_ids: [1]
	}
];


class CatApi {  
  
	static getAllCats() {
	    return fetch('http://localhost:5000/api/v1/cats').then(response => {
	    	return response.json();
	    }).catch(error => {
	    	//return error;
	    	
	    	// but for now lets return the MOCKED DATA:
			return mock;
	    });
	}


	static updateCat(cat) {
		// REAL REQUEST:
	    const request = new Request(`http://localhost:5000/api/v1/cats/${cat.id}`, {
	    	method: 'PUT',
	    	headers: new Headers({
	        	'Content-Type': 'application/json'
	    	}),
	    	body: JSON.stringify({cat: cat})
	    });
	}
};

export default CatApi;
