/**
 * Created by itunu on 7/7/18.
 */
const products = require('./mock_products.json');


export default class ProductService {
	static  getProducts() {
		return products ? products :[];
	}

	static getProduct(id) {
		if(id){
			return products.find(function (product) {
				return product.id == parseInt(id);
			});
		}
	}
}