import Contacts from './contacts';
import React, {Component}  from 'react';
import AddContact from './addcontact';

class ContactList extends Component {
	constructor() {
		super();
		this.state = {
			filtered: Contacts
		}
	}
	handleChange(e) {
		const searchQuery = e.target.value.toLowerCase();
		const filtered = Contacts.filter((el) => {
			return el.name.indexOf(searchQuery) !== -1
		});
			console.log("this", this);
		this.setState({
			filtered: filtered				
		});

	};
	render() {
		return (
			<div>
				<AddContact />
				<input type="text" onChange={this.handleChange.bind(this)} />
				<ul>
					{
						this.state.filtered.map((el) => {
							return (
								<li key={el.id}>
									<img src={el.avatar} width='100px' alt=""/>
									<p className="name">{el.name}</p>
									<p className="phone">{el.phone}</p>	
								</li>
							)
						})
					}
				</ul>
			</div>
		)
	};
}

export default ContactList;