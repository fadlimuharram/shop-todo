import React from 'react';
import { connect } from 'react-redux';
// import useRouter from 'use-react-router';
import { List } from './List';

const Component = props => {
	const { products } = props;
	// const { history } = useRouter();

	// const renderListOfProducts = () => {
	// 	return products.map(product => {
	// 		return (
	// 			<div>
	// 				<button onClick={() => history.push(`/shop/${product.id}`)}>
	// 					{product.name}
	// 				</button>
	// 			</div>
	// 		);
	// 	});
	// };

	return products && products.length > 0 ? (
		<>
			{/* <div>{renderListOfProducts()}</div> */}
			{/* <ul>
				{products.map(product => {
					return (
						<li>
							<button onClick={() => history.push(`/shop/${product.id}`)}>
								{product.name}
							</button>
						</li>
					);
				})}
			</ul> */}

			<div>
				{products.map(product => (
					<List product={product} />
				))}
			</div>
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
