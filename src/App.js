import React, { Component } from 'react';
// import redux from 'redux';
// import {createStore} from 'redux';
import { HashRouter, Switch, Route, Link } from 'react-router-dom'
import Admin from './components/admin'
import Genre from './components/genre'
import Home from './components/home'

const Header = () => (
	<header>
		<nav>
			<ul>
				<li><Link to='/'>Home</Link></li>
				<li><Link to='admin'>Admin</Link></li>
				<li><Link to='/genre'>Genre</Link></li>
			</ul>
		</nav>
	</header>
);
const Routing = () => (
	<div>
		<Header/> 
		<Switch>
			<Route exact path='/' component={Home} />
			<Route path='/admin' component={Admin} />
			<Route path='/genre' component={Genre} />
		</Switch>
	</div>
);
// const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const App = () => (
	<Routing />
);


export default App;
