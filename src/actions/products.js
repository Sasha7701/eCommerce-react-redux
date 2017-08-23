import PRODUCTS from "json/products.json";

export function getAll() {
	return {
		type: "GET_ALL_PRODUCTS",
		products: PRODUCTS,
	};
}


export function getOne(itemId) {
	const products = PRODUCTS;
	return (dispatch) => {
		const activeProduct = products.find((item) => item.id === itemId);
		return dispatch({
			type: "GET_ONE_PRODUCT",
			item: activeProduct,
		});
	};
}
