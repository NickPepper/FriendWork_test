import React, { Component} from 'react';
import { Link } from 'react-router-dom';

class HomePage extends Component {
	render() {
	    return (
		    <div className="jumbotron">
		        <h1>Cat Book</h1>
		        <p>the best way manage your cat collection.</p>
		        <Link to="login" className="btn btn-primary btn-lg">log in as a test user</Link>
		    </div>
	    );
	}
}

export default HomePage;
