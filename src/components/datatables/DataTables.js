/*
 * A presentational component
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// const CatList = ({cats}) => {
// 	return (
//     	<ul className="list-group">
//         	{cats.map(cat => 
//         		<li className="list-group-item" key={cat.id}>
//             		{cat.name}
//         		</li>
//         	)}
//     	</ul>
// 	);
// };

class DataTables extends Component {

	constructor(props, context) {
    	super(props, context);
    	this.state = {
    		data: this.props.data
    	};
	}

	render() {
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
	            	<tr>
		                <td>2016-04-02</td>
		                <td>0</td>
		                <td>0</td>
		                <td>0</td>
		                <td>0</td>
		                <td>0</td>
		                <td>2</td>
		                <td>0</td>
		                <td>187</td>
		                <td>$22.17</td>
	            	</tr>
	            	<tr>
		                <td>2016-04-03</td>
		                <td>0</td>
		                <td>0</td>
		                <td>0</td>
		                <td>0</td>
		                <td>0</td>
		                <td>1</td>
		                <td>0</td>
		                <td>14</td>
		                <td>$0.34</td>
	            	</tr>
	            	<tr>
		                <td>2016-04-04</td>
		                <td>0</td>
		                <td>0</td>
		                <td>0</td>
		                <td>0</td>
		                <td>0</td>
		                <td>2</td>
		                <td>0</td>
		                <td>49</td>
		                <td>$3.34</td>
	            	</tr>
	            	<tr>
		                <td>2016-04-05</td>
		                <td>0</td>
		                <td>0</td>
		                <td>1</td>
		                <td>1</td>
		                <td>0</td>
		                <td>1</td>
		                <td>0</td>
		                <td>90</td>
		                <td>$12.42</td>
	            	</tr>
	            	<tr>
		                <td>2016-04-06</td>
		                <td>0</td>
		                <td>0</td>
		                <td>0</td>
		                <td>0</td>
		                <td>0</td>
		                <td>0</td>
		                <td>0</td>
		                <td>55</td>
		                <td>$10.48</td>
	            	</tr>
	            	<tr>
		                <td>2016-04-07</td>
		                <td>0</td>
		                <td>0</td>
		                <td>0</td>
		                <td>0</td>
		                <td>0</td>
		                <td>0</td>
		                <td>0</td>
		                <td>43</td>
		                <td>$1.12</td>
	            	</tr>
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
	}
};

DataTables.propTypes = {
	data: PropTypes.array.isRequired
};


function mapStateToProps(state, ownProps) {
	const stateData = Object.assign([], state.data);
	console.log('stateData: ', stateData);/////////////////////////////////////////////////////////////////////////////////
    return {data: stateData};
}


export default connect(mapStateToProps)(DataTables);
