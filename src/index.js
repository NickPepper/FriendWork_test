/*eslint-disable import/default */

import './css/index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';  
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import { loadCats } from './actions/catActions';
//import registerServiceWorker from './registerServiceWorker';

const store = configureStore();
store.dispatch(loadCats());

ReactDOM.render(
	<Provider store={store}>
    	<Router history={browserHistory} routes={routes} />
	</Provider>,
	document.getElementById('root')
);
//registerServiceWorker();
