class HobbyApi {

	static getAllHobbies() {
		// REAL DATA REQUEST:
	    // return fetch('http://localhost:5000/api/v1/hobbies').then(response => {
	    // 	return response.json();
	    // }).catch(error => {
	    // 	return error;
	    // });

	    // MOCK DATA:
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
		return mock;
	}
};

export default HobbyApi;
