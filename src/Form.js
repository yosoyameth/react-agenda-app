import React, { Component } from 'react';

class Form extends Component {
	constructor(props) {
		super(props);

		this.initialState = {
			name: '',
			mail: ''
		};

		this.state = this.initialState;
	}

	handleChange = event => {
		const { name, value } = event.target

		this.setState({
			[name]: value, 
		}) 
	};

	submitForm = () => {
		this.props.handleSubmit(this.state)
		this.setState(this.initialState)
	};

	render() {
		const { name, mail } = this.state;

		return (
			<form>
				<label>Name</label>
				<input 
					type="text"
					name="name"
					value={name}
					onChange={this.handleChange}
				/>
				<label>Mail</label>
				<input 
					type="text"
					name="mail"
					value={mail}
					onChange={this.handleChange}
				/>
				<input 
					type="button"
					value="Submit"
					onClick={this.submitForm}
				/>
			</form>
		);
	}
}

export default Form;


