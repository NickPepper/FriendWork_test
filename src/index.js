/*eslint-disable import/default */

import './css/index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';  
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import routes from './routes';
import { loadCats } from './actions/catActions';
import { loadHobbies } from './actions/hobbyActions';
//import registerServiceWorker from './registerServiceWorker';

const store = configureStore();
store.dispatch(loadCats());
store.dispatch(loadHobbies());

ReactDOM.render(
	<Provider store={store}>
    	<BrowserRouter routes={routes} />
	</Provider>,
	document.getElementById('root')
);
//registerServiceWorker();
