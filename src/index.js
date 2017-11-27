/*eslint-disable import/default */

import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { loadData } from './actions/datatablesActions';
import './assets/styles/index.css';
import App from './components/App';
//import registerServiceWorker from './registerServiceWorker';

const store = configureStore();
store.dispatch(loadData());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
//registerServiceWorker();
