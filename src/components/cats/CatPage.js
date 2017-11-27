/*
 * A presentational component
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as catActions from '../../actions/catActions';
import HobbyList from '../hobbies/HobbyList';
import CatForm from './CatForm';


class CatPage extends Component {

	constructor(props, context) {
    	super(props, context);
    	this.state = {
    		isEditing: 			false,
    		cat: 				this.props.cat,
    		catHobbies: 		this.props.catHobbies,
    		checkBoxHobbies: 	this.props.checkBoxHobbies
    	};
    	this.updateCatState 	= this.updateCatState.bind(this);
    	this.updateCatHobbies 	= this.updateCatHobbies.bind(this);
    	this.saveCat 			= this.saveCat.bind(this);
    	this.toggleEdit 		= this.toggleEdit.bind(this);
	}

	updateCatState(event) {
	    const field = event.target.name;
	    const cat = this.state.cat;
	    cat[field] = event.target.value;
	    return this.setState({cat: cat});
	}

	updateCatHobbies(event) {
	    const cat = this.state.cat;
	    const hobbyId = event.target.value;
	    const hobby = this.state.checkBoxHobbies.filter(hobby => hobby.id === hobbyId)[0];
	    const checked = !hobby.checked;
	    hobby['checked'] = !hobby.checked;
	    if (checked) {
	    	cat.hobby_ids.push(hobby.id);
	    } else {
	    	cat.hobby_ids.splice(cat.hobby_ids.indexOf(hobby.id));
	    }
    	this.setState({cat: cat});
	}

	saveCat(event) {
    	event.preventDefault();
    	this.props.actions.updateCat(this.state.cat);
	}

	toggleEdit() {
    	this.setState({isEditing: !this.state.isEditing});
	}

	componentWillReceiveProps(nextProps) {
	    if (this.props.cat.id !== nextProps.cat.id) {
	    	this.setState({cat: nextProps.cat});
	    }
	    if (this.props.checkBoxHobbies.length < nextProps.checkBoxHobbies.length) {
	    	this.setState({catHobbies: nextProps.catHobbies, checkBoxHobbies: nextProps.checkBoxHobbies});
	    }
	}

	render() {
		if (this.state.isEditing) {
    		return (
			    <div>
			        <h1>edit cat</h1>
			        <CatForm 
				        cat={this.state.cat} 
				        hobbies={this.state.checkBoxHobbies}
				        onSave={this.saveCat} 
				        onChange={this.updateCatState} 
				        onHobbyChange={this.updateCatHobbies}/>
			    </div>
    		)
    	}
	    return (
	    	<div className="col-md-8 col-md-offset-2">
		        <h1>{this.props.cat.name}</h1>
		        <p>breed: {this.props.cat.breed}</p>
		        <p>weight: {this.props.cat.weight}</p>
		        <p>temperament: {this.props.cat.temperament}</p>
		        <HobbyList hobbies={this.props.catHobbies} />
		        <button onClick={this.toggleEdit}>edit</button>
	    	</div>
	    );
	}
};

CatPage.propTypes = {
	cat: 				PropTypes.object.isRequired,
	catHobbies: 		PropTypes.array.isRequired,
	checkBoxHobbies: 	PropTypes.array.isRequired,
	actions: 			PropTypes.object.isRequired
};


function getCatById(cats, id) {
	let cat = cats.find(cat => cat.id === id);
	return Object.assign({}, cat);
}


function collectCatHobbies(hobbies, cat) {
	let selected = hobbies.map(hobby => {
    	if (cat.hobby_ids.filter(hobbyId => hobbyId === hobby.id).length > 0) {
    		return hobby;
    	} else {
    		return {id: 0, name: "UNKNOWN"};
    	}
	});
	return selected.filter(el => el !== "undefined");
}


function hobbiesForCheckBoxes(hobbies, cat=null) {
	return hobbies.map(hobby => {
	    if (cat && cat.hobby_ids.filter(hobbyId => hobbyId === hobby.id).length > 0) {
	    	hobby['checked'] = true;
	    } else {
	    	hobby['checked'] = false;
	    }
    	return hobby;
	});
}


function mapStateToProps(state, ownProps) {
	const stateHobbies = Object.assign([], state.hobbies);
	let checkBoxHobbies = [];
	let catHobbies = [];
	let cat = {name: 'UNKNOWN', breed: 'UNKNOWN', weight: 'UNKNOWN', temperament: 'UNKNOWN', hobby_ids: []};
	const catId = ownProps.params.id;
	if (catId && state.cats.length > 0 && state.hobbies.length > 0) {
    	cat = getCatById(state.cats, ownProps.params.id);
	    if (cat.hobby_ids.length > 0) {
	    	checkBoxHobbies = hobbiesForCheckBoxes(stateHobbies, cat);
	    	catHobbies = collectCatHobbies(stateHobbies, cat);
	    } else {
	    	checkBoxHobbies = hobbiesForCheckBoxes(stateHobbies);
	    }
	}
    return {cat: cat, checkBoxHobbies: checkBoxHobbies, catHobbies: catHobbies};
}


function mapDispatchToProps(dispatch) {
	return {
  		actions: bindActionCreators(catActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(CatPage);
