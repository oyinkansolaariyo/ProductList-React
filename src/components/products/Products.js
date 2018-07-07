/**
 * Created by itunu on 7/7/18.
 * The top level component that contains a list of products(productlist)
 */

import React, {Component} from 'react';
import ProductList from './ProductList';

export default class Products extends Component {
	constructor() {
		super();
	}

	render() {
		return(
			<div className="container-fluid product-container">
				<ProductList/>
			</div>
		);
	}
}