/*
 * A functional component - stateless component
 */
import React from 'react';
import PropTypes from 'prop-types';


const DataTables = ({data}) => {
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
	                <th>0</th>
	                <th>0</th>
	                <th>1</th>
	                <th>1</th>
	                <th>0</th>
	                <th>6</th>
	                <th>0</th>
	                <th>438</th>
	                <th>$49.86</th>
            	</tr>
        	</tfoot>
    	</table>
	);
};

DataTables.propTypes = {
	data: PropTypes.array.isRequired
};

export default DataTables;
