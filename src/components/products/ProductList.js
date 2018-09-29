/**
 * Created by itunu on 7/7/18.
 */
import React, {Component} from 'react';
import ProductService from '../../services/ProductService';
import Product from './Product';

export default class ProductList extends Component {
	constructor() {
		super();

		this.state = {
			products:ProductService.getProducts()
		};
	}

	render() {
		const  productList = this.state.products.map((product) =>
			<Product key={product.id} product={product}/>
		);
		return(
			<div className="row">
				{productList}
			</div>
		);
	}
}