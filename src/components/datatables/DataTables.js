/*
 * A functional component - stateless component
 */
import React from 'react';
import PropTypes from 'prop-types';


const DataTables = ({data}) => {
	let hitsSum 		= 0,
		uniqueSum 		= 0,
		regsSum 		= 0,
		demoregsSum 	= 0,
		conversionSum 	= 0,
		depositSum 		= 0,
		ftdSum 			= 0,
		dealsSum 		= 0,
		profitSum 		= 0;
	for (let i = 0, l = data.length; i < l; i++) {
		hitsSum 		+= data[i].hits;
		uniqueSum 		+= data[i].unique;
		regsSum 		+= data[i].regs;
		demoregsSum 	+= data[i].demoregs;
		conversionSum 	+= data[i].conversion;
		depositSum 		+= data[i].deposit;
		ftdSum 			+= data[i].ftd;
		dealsSum 		+= data[i].deals;
		profitSum 		+= data[i].profit;
	}

	return (
    	<table id="FWtest" className="display responsive nowrap" width="100%" cellSpacing="0">
        	<thead>
            	<tr>
	                <th>Date</th>
	                <th>Hits</th>
	                <th>Unique</th>
	                <th>Registrations</th>
	                <th>Demo registrations</th>
	                <th>Conversion</th>
	                <th>Deposit</th>
	                <th>Ftd</th>
	                <th>Deals</th>
	                <th>Profit</th>
            	</tr>
        	</thead>
        	<tbody>
        		{data.map(row =>
            	<tr key={row.id}>
	                <td>{row.date}</td>
	                <td>{row.hits}</td>
	                <td>{row.unique}</td>
	                <td>{row.regs}</td>
	                <td>{row.demoregs}</td>
	                <td>{row.conversion}</td>
	                <td>{row.deposit}</td>
	                <td>{row.ftd}</td>
	                <td>{row.deals}</td>
	                <td>${row.profit}</td>
            	</tr>
            	)}
        	</tbody>
        	<tfoot>
            	<tr>
	                <th>Total</th>
	                <th>{hitsSum}</th>
	                <th>{uniqueSum}</th>
	                <th>{regsSum}</th>
	                <th>{demoregsSum}</th>
	                <th>{conversionSum}</th>
	                <th>{depositSum}</th>
	                <th>{ftdSum}</th>
	                <th>{dealsSum}</th>
	                <th>${profitSum}</th>
            	</tr>
        	</tfoot>
    	</table>
	);
};

DataTables.propTypes = {
	data: PropTypes.array.isRequired
};

export default DataTables;
