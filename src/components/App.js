import React, { Component } from 'react';
import logo from '../images/logo.svg';
import Products from './products/Products';
import 'bootstrap';

class App extends Component {
	render() {
		return (
			<div className="container-fluid">
				<nav className="header navbar navbar-dark bg-dark">
					<div className="container">
						<div className="row m-auto">
							<i className="fa fa-product-hunt fa-2x text-white my-auto"></i>
							<div className="h3 ml-3 my-auto text-light" href="/">Products List</div>
						</div>
					</div>
				</nav>
				<div className="mt-5">
					<Products/>
				</div>
			</div>
		);
	}
}

export default App;
