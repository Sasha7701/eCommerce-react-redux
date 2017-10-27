const INITIAL_STATE = {
	cartCount: 0,
	cart: [],
};

function cartReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
	case "ADD_TO_CART":
		return {
			cart: [...state.cart,
				action.product,
			],
			cartCount: state.cartCount + 1,
		};
		// Error Cases
	case "CANT_ADD_TO_CART":
		return {
			...state,
			error: action.error,
		};
		// Case Order Submitted Cart goes 0
	case "SUBMIT_ORDER_SUCCESS":
		return {
			...state,
			cart: [],
			cartCount: 0,
		};

	default:
		return state;
	}
}


export default cartReducer;
