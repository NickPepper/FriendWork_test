/*
 * A functional component - stateless component
 */
import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';

const About = () => {  
    return (
        <div className="App">
            <Header text="About page"/>
            <Footer/>
        </div>
    );
};

export default About;
