let mock = {
	cols: [
       {id: 'id',         name: 'name'},
       {id: 'date',   	  name: 'Date'},
       {id: 'hits', 	  name: 'Hits'},
       {id: 'unique',  	  name: 'Unique'},
       {id: 'regs',  	  name: 'Registrations'},
       {id: 'demoregs',   name: 'Demo registrations'},
       {id: 'conversion', name: 'Conversion'},
       {id: 'deposit',    name: 'Deposit'},
       {id: 'ftd',  	  name: 'Ftd'},
       {id: 'deals',  	  name: 'Deals'},
       {id: 'profit',  	  name: 'Profit'}
     ],
     rows: [
       {id: 1, date: "", hits: "", unique: "", regs: "", demoregs: "", conversion: "", deposit: "", ftd: "", deals: "", profit: ""},
       {id: 2, date: "", hits: "", unique: "", regs: "", demoregs: "", conversion: "", deposit: "", ftd: "", deals: "", profit: ""},
       {id: 3, date: "", hits: "", unique: "", regs: "", demoregs: "", conversion: "", deposit: "", ftd: "", deals: "", profit: ""},
       {id: 4, date: "", hits: "", unique: "", regs: "", demoregs: "", conversion: "", deposit: "", ftd: "", deals: "", profit: ""},
       {id: 5, date: "", hits: "", unique: "", regs: "", demoregs: "", conversion: "", deposit: "", ftd: "", deals: "", profit: ""},
       {id: 6, date: "", hits: "", unique: "", regs: "", demoregs: "", conversion: "", deposit: "", ftd: "", deals: "", profit: ""}
     ]
};


class DatatablesApi {  
  
	static getDatatablesData() {
	    return fetch('http://localhost:5000/api/v1/datatables').then(response => {
	    	//return response.json();
	    	return mock;
	    }).catch(error => {
	    	//return error;
	    	return mock;
	    });
	}
};

export default DatatablesApi;
