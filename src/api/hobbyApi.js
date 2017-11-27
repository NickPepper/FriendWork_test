let mock = [
	{
		id: 1, 
		name: "Sleeping", 
	},
	{
		id: 2, 
		name: "Sex", 
	}
];

class HobbyApi {

	static getAllHobbies() {
	    return fetch('http://localhost:5000/api/v1/hobbies').then(response => {
	    	return response.json();
	    }).catch(error => {
	    	//return error;
	    	
	    	// but for now lets return the MOCKED DATA:
			return mock;
	    });
	}
};

export default HobbyApi;
