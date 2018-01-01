import React, { Component } from 'react';
import redux from 'redux';
import {createStore} from 'redux';

import ContactList from './components/contact-list';

// const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
class App extends Component {
    render() {
        return (
            <ContactList />            
        );
    }
}

export default App;
