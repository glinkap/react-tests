import Contacts from './contacts';
import React, {Component}  from 'react';
import AddContact from './addcontact';

class ContactList extends Component {
	constructor() {
		super();
		this.state = {
			filtered: Contacts,
			inputedItems:[]
		}
	}
	handleChange(e) {
		const searchQuery = e.target.value.toLowerCase();

console.log("Contacts.concat(this.state.inputedItems)", Contacts.concat(this.state.inputedItems));
		const filtered = Contacts.concat(this.state.inputedItems).filter((el) => {
			return el.name.indexOf(searchQuery) !== -1
		});
			console.log("this", this);
		this.setState({
			filtered: filtered				
		});

	};
	newItem(item){
		// item.id = this.state.filtered.length + 1;
		console.log(this.state);
		this.setState({
			inputedItems: this.state.inputedItems.concat(item)				
		});
		console.log(this.state.inputedItems);
		console.log("состояние изменилось");
	}
	render() {
		return (
			<div>
				<AddContact onSubmit={this.newItem.bind(this)} />
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