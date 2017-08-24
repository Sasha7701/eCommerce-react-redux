const INITIAL_STATE = {
	products: [],
	activeProduct: null,
	error: null,
	isLOADING: false,
};


function productsReduced(state = INITIAL_STATE, action) {
	switch (action.type) {
	case "LOADING_PRODUCTS":
		return {
			...state,
			isLOADING: true,
			products: [],
		};

	case "GET_ALL_PRODUCTS":
		return {
			...state,
			isLOADING: false,
			products: action.products,
		};

	case "LOADING_PRODUCTS":
		return {
			...state,
			isLOADING: true,
			products: [],
		};

	case "LOADING_SELECTED_PRODUCT":
		return {
			...state,
			isLOADING: true,
			activeProduct: null,
		};

	case "SELECTED_PRODUCT_LOAD_SUCCESS":
		return {
			...state,
			activeProduct: action.product,
			isLOADING: false,
		};



	// Error Cases

	case "PRODUCTS_LOAD_ERROR":
		return {
			...state,
			isLOADING: false,
			error: action.error,
		};
	case "SELECTED_PRODUCT_LOAD_ERROR":
		return {
			...state,
			isLOADING: false,
			error: action.error,
		};

	default:
		return state;
	}
}


export default productsReduced;

// const INITIAL_STATE = {
// 	products: [],
// 	activeProduct: null,
// 	error: null,
// };
//
//
// function productsReducer(state = INITIAL_STATE, action) {
// 	switch (action.type) {
// 	case "GET_ALL_PRODUCTS":
// 		return {
//         	...state,
//       	products: action.products,
//     			};
// 	case "GET_ONE_PRODUCT":
//       	return {
// 			...state,
// 			 activeProduct: action.product,
// 		};
// 	default:
// 		return state;
// 	}
// }
//
//
// export default productsReducer;
