import React, { Component } from 'react';

class App extends Component {
	test() {
		var tmp = (s) => {
			return s + 'tmpabc000';
		}
	}
	render() {
		return (
			<div className="app">index page</div>
		);
	}
};

export default App;