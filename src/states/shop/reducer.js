const initialState = {
	products: [
		{
			id: 1,
			name: 'nama produk 1',
			image: 'https://cf.shopee.co.id/file/9ec05755f16de1bd3e9b578ea7aabed4',
			qty: 0,
		},
		{
			id: 2,
			name: 'nama produk 2',
			image:
				'https://d3p0bla3numw14.cloudfront.net/news-content/img/2020/11/02090906/desain-lemari-pakaian-19.jpg',
			qty: 0,
		},
		{
			id: 3,
			name: 'nama produk 3',
			image: 'https://www.icreate.id/assets/images/product/pic1/000002.jpg',
			qty: 0,
		},
		{
			id: 4,
			name: 'nama produk 4',
			image: '',
			qty: 0,
		},
		{
			id: 5,
			name: 'nama produk 5',
			image: '',
			qty: 0,
		},
		{
			id: 6,
			name: 'nama produk 6',
			image: '',
			qty: 0,
		},
	],
	product: {
		id: 0,
		name: 'produk',
		image: '',
		qty: 0,
	},
};

const shopReducer = (state = initialState, action) => {
	let products;
	let product;

	switch (action.type) {
		case 'GET_PRODUCT_BY_ID':
			const findProduct = state.products.find(
				product => String(product.id) === String(action.payload.id),
			);

			return {
				...state,
				product: findProduct,
			};

		case 'ADD_TO_CART':
			products = state.products.map(product => {
				if (String(product.id) === String(action.payload.id)) {
					return {
						...product,
						qty: product.qty + 1,
					};
				} else {
					return product;
				}
			});

			product = {
				...state.product,
				qty: state.product.qty + 1,
			};

			return {
				...state,
				products: products,
				product: product,
			};

		default:
			return state;
	}
};

export default shopReducer;
