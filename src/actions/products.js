//import PRODUCTS from "json/products.json";
import API from "util/api";

export function getAll() {
	return (dispatch) => {
		dispatch({ type: "LOADING_PRODUCTS" });
		API.get("/products").then((res) => {
			console.log(" getAll() action/function   res.data: ", res.data);
			if (res.data) {
				dispatch({
					type: "GET_ALL_PRODUCTS",
					products: res.data.products,
				});
			}
			else {
				dispatch({
					type: "PRODUCTS_CANT_LOAD",
					error: res.error,
				});
			}
		}).catch((error) => {
			dispatch({
				type: "PRODUCTS_LOAD_ERROR",
				error: "Something failed",
			});
		});
	};
}


export function getOne(productId) {
	return (dispatch) => {
		dispatch({ type: "LOADING_SELECTED_PRODUCT" });
		API.get(`/products/${productId}`).then((res) => {
			if (res.data) {
				dispatch({
					type: "SELECTED_PRODUCT_LOAD_SUCCESS",
				 	product: res.data.product,
					productId: res.data.product.id,
				});
			}
			else {
				dispatch({
					type: "SELECTED_PRODUCT_CANT_LOAD",
					error: "Can not find that product!",
				});
			}
		})

			.catch((err) => {
				dispatch({
					type: "SELECTED_PRODUCT_CANT_LOAD",
					error: "Something went wrong. Refresh",
				});
			});
	};
}


// export function getAll() {
// 	return {
// 		type: "GET_ALL_PRODUCTS",
// 		products: PRODUCTS,
// 	};
// }
//
//
// export function getOne(productId) {
//
// 	return (dispatch) => {
// 		const activeProduct = products.find((product) => product.id === productId);
// 		return dispatch({
// 			type: "GET_ONE_PRODUCT",
// 			item: activeProduct,
// 		});
// 	};
