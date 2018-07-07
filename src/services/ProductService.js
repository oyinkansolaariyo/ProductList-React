/**
 * Created by itunu on 7/7/18.
 */
const products = require('./mock_products.json');


export default class ProductService {
	static  getProducts() {
		return products ? products :[];
	}
}