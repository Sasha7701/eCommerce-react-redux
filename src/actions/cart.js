// Using product instead of productId because you already have it loaded

export function addToCart(product) {
	console.log(product,'=========');
	return (dispatch) => {
		if (product) {
			dispatch({
				type: "ADD_TO_CART",
				product,
				productId: product.id,
			});
		}
		else {
			 dispatch ({
				type: "CANT_ADD_TO_CART",
				error: "Failed to add to cart!",
			});
		}
	};
}
