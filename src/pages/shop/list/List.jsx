import React from 'react';
import useRouter from 'use-react-router';

const List = props => {
	const { history } = useRouter();
	const { product } = props;
	return (
		<div>
			<button onClick={() => history.push(`/shop/${product.id}`)}>{product.name}</button>
		</div>
	);
};

export { List };
