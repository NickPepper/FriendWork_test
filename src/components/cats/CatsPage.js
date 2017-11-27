/*
 * A container component
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as catActions from '../../actions/catActions';
import CatList from './CatList';

class CatsPage extends Component {

	render() {
    	return(
		    <div className="col-md-12">
		        <h1>Cats</h1>
		        <div className="col-md-4">
		        	<CatList cats={this.props.cats} />
		        </div>
		        <div className="col-md-8">
        			{this.props.children}
        		</div>
		    </div>
    	);
	}

};

CatsPage.propTypes = {
	cats: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
	// state = {cats: [{id:1, name: "Maru"}, {id:2, name: "Xaru"}, etc.]}
	return {
    	cats: state.cats
	};
}

export default connect(mapStateToProps)(CatsPage);
