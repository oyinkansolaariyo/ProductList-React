/**
 * Created by itunu on 7/7/18.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import{
	Link
} from 'react-router-dom';

export  default class Product extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<Link to={`/products/${this.props.product.id}`}>
				<div className="card product-card">
					<img className="card-img-top product-image" src={this.props.product.image_url} alt={this.props.product.title}/>
					<div className="card-body">
						<h4 className="card-title">{this.props.product.title}</h4>
						<h6 className="card-subtitle mb-2 text-muted">{this.props.product.subtitle}</h6>
						<p className="text-justify" style={{fontSize: '14px'}}>{this.props.product.description}</p>
					</div>
					<div className="card-footer">
						<div className="clearfix">
							<div className="row">
								<div className="col-md-6">
								Price:&#x20A6; {this.props.product.price}
								</div>
								<div className="col-md-6">
								Qty : {this.props.product.quantity}
								</div>
							</div>

						</div>
					</div>
				</div>
			</Link>
		);
	}


}

Product.propTypes = {
	product: PropTypes.object
};

Product.defaultProps = {
	product: {}
};