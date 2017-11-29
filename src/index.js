/*eslint-disable import/default */

import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { loadData } from './actions/datatablesActions';
import {
  BrowserRouter,
  Route,
  NavLink
} from 'react-router-dom';
import './assets/styles/index.css';
import App from './components/App';
import About from './components/about/About';
import Cats from './components/cats/Cats';
//import registerServiceWorker from './registerServiceWorker';

const store = configureStore();
store.dispatch(loadData());

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <nav>
                <NavLink exact to="/" activeClassName="active">Home</NavLink>
                {" | "}
                <NavLink to="/about" activeClassName="active">About</NavLink>
                {" | "}
                <NavLink to="/cats" activeClassName="active">Cats</NavLink>

                <Route exact path="/" component={App}/>
                <Route path="/about" component={About}/>
                <Route path="/cats" component={Cats}/>
            </nav>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));
//registerServiceWorker();
