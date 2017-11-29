// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// styles
import "../assets/styles/jquery.dataTables.min.css";
import "../assets/styles/responsive.dataTables.min.css";
import '../assets/styles/App.css';
// components
import Header from './common/Header';
import DataTables from './datatables/DataTables';

class App extends Component {

    // getInitialState() {
    //     return { /* something here */};
    // }

    // getDefaultProps() {
    //     return { /* something here */};
    // }

    // componentWillMount() {
    // }
    
    // componentWillReceiveProps(nextProps) {
    //     this.setState({
    //         // set something 
    //     });
    // }

    // shouldComponentUpdate(nextProps, nextState) {
    //     return true; // boolean value must be returned
    // }

    // componentWillUpdate(nextProps, nextState) {
    //     // perform any preparations for an upcoming update
    // }

    render() {
        return (
            <div className="App">
                <Header 
                    text="Reactive DataTables"/>
                <p>This is the test made for the <a href="https://friend.work/" target="_blank" rel="noopener noreferrer">&laquo;FriendWork&raquo;</a> company by Nick Pershin.<br/>Copyright (c) 2017 Nick Pershin. All rights reserved!</p>
                <p>As a smart table was the jQuery's <a href="https://datatables.net/" target="_blank" rel="noopener noreferrer">DataTables</a> used.<br/>To see why this table is smart, please resize the browser window narroving it's width - you'll see how the table below responses to the screen width changes.</p>
                <p>&nbsp;</p>
                <DataTables
                    data={this.props.data} />
            </div>
        );
    }

    // componentDidMount() {
    // }

    // componentWillUnmount() {
    // }

    // componentDidUpdate(prevProps, prevState) {
    // }
}

App.propTypes = {
    data: PropTypes.array.isRequired
};


function mapStateToProps(state, ownProps) {
    return {
        data: state.data
    };
}


export default connect(mapStateToProps)(App);
