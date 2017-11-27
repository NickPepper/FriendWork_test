// @flow

import React, { Component } from 'react';
//import PropTypes from 'prop-types';
// styles
import "../css/jquery.dataTables.min.css";
import "../css/responsive.dataTables.min.css";
import '../css/App.css';
// components
import Header from './common/Header';
import DataTables from './datatables/DataTables';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <p>This is the test made for the <a href="https://friend.work/" target="_blank" rel="noopener noreferrer">&laquo;FriendWork&raquo;</a> company by Nick Pershin.<br/>Copyright (c) 2017 Nick Pershin. All rights reserved!</p>
        <p>As a smart table was the jQuery's <a href="https://datatables.net/" target="_blank" rel="noopener noreferrer">DataTables</a> used.<br/>To see why this table is smart, please resize the browser window narroving it's width - you'll see how the table below responses to the screen width changes.</p>
        <p>&nbsp;</p>
        <DataTables />
    </div>
    );
  }
}

export default App;
