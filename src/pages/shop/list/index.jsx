import React from 'react';
import { connect } from 'react-redux';
import useRouter from 'use-react-router';

const Component = props => {
	const { products } = props;
	const { history } = useRouter();

	return products && products.length > 0 ? (
		<>
			<ul>
				{products.map(product => {
					return (
						<li>
							<button onClick={() => history.push(`/shop/${product.id}`)}>
								{product.name}
							</button>
						</li>
					);
				})}
			</ul>
		</>
	) : (
		<>
			<div>todo kosong</div>
		</>
	);
};

const mapStateToProps = state => ({
	products: state.shop.products,
});

const ListShop = connect(mapStateToProps, null)(Component);

export { ListShop };
// export default ListShop;
