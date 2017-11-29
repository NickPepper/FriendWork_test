import React from 'react';  
import { Route } from 'react-router';  
import App from './components/App';  
//import HomePage from './components/home/HomePage';  
//import CatsPage from './components/cats/CatsPage';  
//import CatPage from './components/cats/CatPage';

export default (  
	<Route path="/" component={App}>
    	{/*<Route exact component={HomePage} />*/}
    	<Route exact component={App} />
{/*    	<Route path="/cats" component={CatsPage} >
    		<Route path="/cats/:id" component={CatPage} />
    	</Route>*/}
	</Route>
);
