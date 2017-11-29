/*
 * A functional component - stateless component
 */
import React from 'react';
import Header from '../common/Header';
import Footer from './common/Footer';

const Cats = () => {  
    return (
        <div className="App">
            <Header text="Cats page"/>
            <Footer/>
        </div>
    );
};

export default Cats;
