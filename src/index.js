import React from 'react';
import ReactDOM from 'react-dom';

import { HashRouter } from 'react-router-dom'

import App from './App';

import registerServiceWorker from './registerServiceWorker';

// import { Router, Route, IndexRoute, browserHistory } from 'react-router';
// import { browserHistory } from 'react-router-dom';

ReactDOM.render(
	<HashRouter>
		<App />
	</HashRouter>,
	document.getElementById('root')
	);
registerServiceWorker();
