const INITIAL_STATE = {
	order: {},
	orderSuccess: false,
	orderFailure: false,
	error: null,

};


function checkoutReduced(state = INITIAL_STATE, action) {
	switch (action.type) {

	case "SUBMIT_ORDER_SUCCESS":
		return {
			...state,
			order: action.order,
		};



	// Error Cases

	case "SUBMIT_ORDER_FAILURE":
		return {
			...state,
			error: action.error,
		};

	default:
		return state;
	}
}


export default checkoutReduced;
