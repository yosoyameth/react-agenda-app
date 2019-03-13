import React, { Component } from 'react';
import Table from './Table';

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

	render() {
		return(
			<div className="container">
				<Table 
					characterData={this.state.characters} 
					removeCharacter={this.removeCharacter}
				/>
			</div>
		);
	}
}

export default App;