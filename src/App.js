// @flow

import React, { Component } from 'react';
// assets
import logo from './images/logo.svg';
// styles
import "./css/jquery.dataTables.min.css";
import "./css/responsive.dataTables.min.css";
import './css/App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Reactive DataTables!</h1>
        </header>
        <p>This is the test made for the <a href="https://friend.work/" target="_blank" rel="noopener noreferrer">&laquo;FriendWork&raquo;</a> company by Nick Pershin.<br/>Copyright (c) 2017 Nick Pershin. All rights reserved!</p>
        <p>As a smart table was the jQuery's <a href="https://datatables.net/" target="_blank" rel="noopener noreferrer">DataTables</a> used.<br/>To see why this table is smart, please resize the browser window narroving it's width - you'll see how the table below responses to the screen width changes.</p>
        <p>&nbsp;</p>

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
    </div>
    );
  }
}

export default App;
