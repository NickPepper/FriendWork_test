/*
 * A functional component - stateless component
 */
import React from 'react';
import Header from '../common/Header';

const Cats = () => {  
	return (
        <div className="App">
            <Header
            	text="Cats page"/>
        </div>
	);
};

export default Cats;
