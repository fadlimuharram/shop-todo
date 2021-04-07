import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import useRouter from 'use-react-router';

import { getProductById, addToCartById } from '../../../states/shop/action';

const Component = props => {
	const { getProductById, product, addToCartById } = props;
	const { match } = useRouter();

	useEffect(() => {
		getProductById(match.params.id);
	}, [match.params.id, getProductById]);

	const onAddToCart = () => {
		addToCartById(match.params.id);
	};

	return (
		<>
			<div>Nama Produk: {product.name} </div>
			<button onClick={onAddToCart}>Tambah Ke Keranjang</button>
			<i className="fa fa-address-book" aria-hidden="true"></i>
			<i className="fa fa-bath" aria-hidden="true"></i>

			<h1>{product.qty}</h1>

			<img src={product.image} alt="" />
		</>
	);
};

const mapStateToProps = state => ({
	product: state.shop.product,
});

const mapDispatchToProps = dispatch => ({
	getProductById: id => dispatch(getProductById(id)),
	addToCartById: id => dispatch(addToCartById(id)),
});

const DetailShop = connect(mapStateToProps, mapDispatchToProps)(Component);

export { DetailShop };
