import Contacts from './contacts';
import React, {Component}  from 'react';
import AddContact from './addcontact';
class ContactList extends Component {
	constructor() {
		super();
		this.state = {
			filtered: Contacts,
			inputedItems:[],
			fullList:[]
		};
		this.props = {idGen:0};
	}
	handleChange(e) {
		const searchQuery = e.target.value.toLowerCase();
		const filtered = Contacts.concat(this.state.inputedItems).filter((el) => {
			return el.name.indexOf(searchQuery) !== -1
		});
		this.setState({
			filtered: filtered				
		});

	};
	newItem(item){
		console.log("this", this);
		item.id = this.state.inputedItems.concat(this.state.filtered).length + 1;
		this.setState({
			inputedItems: this.state.inputedItems.concat(item)				
		});
		// this.forceUpdate();
	}
	render() {
		return (
			<div>
				<AddContact onSubmit={this.newItem.bind(this)} />
				<input type="text" onChange={this.handleChange.bind(this)} />
				<ul>
					{
						this.state.filtered.concat(this.state.inputedItems).map((el) => {
							return (
								<li key ={el.id.toString()}>
									<img src={el.avatar} width='100px' alt=""/>
									<p>{el.id}</p>
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