import React, {Component}  from 'react';
import ContactList from './contact-list';

export default class Admin extends Component {
	render() {
		return (
			<div>
				Admin
				<ContactList /> 
			</div>
			);
	}
};

