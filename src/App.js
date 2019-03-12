import React, { Component } from 'react';
import Table from './Table';

class App extends Component {
	render() {

		const characters = [
			{
				'name' : 'charlie',
				'mail' : 'charlie@gmail.com'
			},
			{
				'name' : 'Mac',
				'mail' : 'mac@gmail.com'
			},
			{
				'name' : 'carlos',
				'mail' : 'carlos@gmail.com'
			}
		];


		return(
			<div className="container">
				<Table characterData={characters} />
			</div>
		);
	}
}

export default App;