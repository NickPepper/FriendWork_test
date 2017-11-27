//
// TODO: fix this (if you wanna):
// Invariant Violation: Could not find "store" in either the context or props of "Connect(DataTables)".
// Either wrap the root component in a <Provider>, or explicitly pass "store" as a prop to "Connect(DataTables)".
// 
// It seems to be only JEST related error but not the application data flow error.
// 

import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<App />, div);
});
