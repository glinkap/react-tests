import React, { Component } from 'react';
export default class AddContact extends Component {
	// constructor() {
	// 	super();
	// 	this.state = {
	// 		contact:undefined
	// 	}
	// }
	handleSubmit = e => {
		e.preventDefault();
		// console.log({target:e.target});
		// console.log(this.inputNode.value);
		const contact = {
			name: e.target.name.value,
			phone:e.target.phone.value,
			avatar:e.target.avatar.value
		}
		this.props.onSubmit(contact);

	}
	render() {
		return (
			<div className='addContact'>
				<form onSubmit={this.handleSubmit}>
					<label >Имя
						<input type="text" name="name" ref={node => (this.inputNode = node)}/>
					</label><br/>	
					<label >Телефон
						<input type="text" name="phone"/>
					</label><br/>
					<label >Аватар
						<input type="text" name="avatar"/>
					</label><br/>
					<button type="submit" className='addButton'>Добавить</button>
				</form>
			</div>
		)
	}
}