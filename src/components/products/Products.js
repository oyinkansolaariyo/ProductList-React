/**
 * Created by itunu on 7/7/18.
 * The top level component that contains a list of products(productlist)
 */

import React, {Component} from 'react';
import ProductList from './ProductList';
import ProductView from './ProductView';
import{Route} from 'react-router-dom';

export default class Products extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<div className="container-fluid product-container">
				<Route exact path="/" component={ProductList}></Route>
				<Route path="/products/:productId" component={ProductView}></Route>
			</div>
		);
	}
}