let mock = {
	headers: [
       {id: "date",   	  name: "Date"},
       {id: "hits", 	  name: "Hits"},
       {id: "unique",  	  name: "Unique"},
       {id: "regs",  	  name: "Registrations"},
       {id: "demoregs",   name: "Demo registrations"},
       {id: "conversion", name: "Conversion"},
       {id: "deposit",    name: "Deposit"},
       {id: "ftd",  	  name: "Ftd"},
       {id: "deals",  	  name: "Deals"},
       {id: "profit",  	  name: "Profit"}
     ],
     rows: [
       {id: 1, date: "2016-04-02", hits: 0, unique: 0, regs: 0, demoregs: 0, conversion: 0, deposit: 2, ftd: 0, deals: 187, profit: 22.17},
       {id: 2, date: "2016-04-03", hits: 0, unique: 0, regs: 0, demoregs: 0, conversion: 0, deposit: 1, ftd: 0, deals: 14, profit: 0.34},
       {id: 3, date: "2016-04-04", hits: 0, unique: 0, regs: 0, demoregs: 0, conversion: 0, deposit: 2, ftd: 0, deals: 49, profit: 3.34},
       {id: 4, date: "2016-04-05", hits: 0, unique: 0, regs: 1, demoregs: 1, conversion: 0, deposit: 1, ftd: 0, deals: 90, profit: 12.42},
       {id: 5, date: "2016-04-06", hits: 0, unique: 0, regs: 0, demoregs: 0, conversion: 0, deposit: 0, ftd: 0, deals: 55, profit: 10.48},
       {id: 6, date: "2016-04-07", hits: 0, unique: 0, regs: 0, demoregs: 0, conversion: 0, deposit: 0, ftd: 0, deals: 43, profit: 1.12}
     ]
};


class DatatablesApi {  
  
	static getDatatablesData() {
	    return fetch('http://localhost:5000/api/v1/datatables').then(response => {
	    	//return response.json();
	    	//return {headers: mock.headers, rows: mock.rows};
	    	return mock.rows;
	    }).catch(error => {
	    	//return error;
	    	//return {headers: mock.headers, rows: mock.rows};
	    	return mock.rows;
	    });
	}
};

export default DatatablesApi;
