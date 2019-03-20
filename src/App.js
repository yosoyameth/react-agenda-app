import React, { Component } from 'react';
import Table from './Table';
import Form from './Form.js';

class App extends Component {

	removeCharacter = index => {
		const { characters } = this.state;

		this.setState({
			characters: characters.filter((character, i) => {
				return i !== index;
			})
		});
	};

	state = {
        characters: []        
     };

     handleSubmit = character => {
     	this.setState({characters: [...this.state.characters, character]})
     };

	render() {
		return(
			<div className="container">
				<Form handleSubmit={this.handleSubmit} />
				<Table 
					characterData={this.state.characters} 
					removeCharacter={this.removeCharacter}
				/>
			</div>
		);
	}
}

export default App;