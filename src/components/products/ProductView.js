/**
 * Created by itunu on 9/29/18.
 */
import React,{ Component} from 'react';
import PropTypes from 'prop-types';
import ProductService from '../../services/ProductService';

export  default class ProductView extends Component{
	constructor(props) {
		super(props);

		this.state = {
			product : ProductService.getProduct(this.props.match.params.productId)
		};
	}

	render() {
		return (
			<div className="row">
				<div className="col-md-7">
					<img className="product-view-image" src={this.state.product.image_url} alt={this.state.product.title}/>
				</div>
				<div className="col-md-5">
					<div className="card-title">{this.state.product.title} </div>
					<div className="card-subtitle">{this.state.product.subtitle} </div>
					<div className="card-body">{this.state.product.description}</div>
					<div className="row">
						<div className="col-md-6">
							Price:&#x20A6; {this.state.product.price}
						</div>
						<div className="col-md-6">
							Qty : {this.state.product.quantity}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

ProductView.propTypes = {
	match: PropTypes.shape({
		params: PropTypes.shape({
			productId: PropTypes.number
		})
	})
};