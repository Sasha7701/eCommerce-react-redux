import API from "util/api";


export function submitOrder(order, cartIds) {
	return (dispatch, getStore) => {
		const { cart } = getStore().cart;
		console.log(cart, productIds, order, "LLLLLLLLLLLLLLLLLLLLLLLLPPPPPPPPPPPPPPPPP");
		// First check if we have the gif. If we do, serve it right away!
		const productIds = cart.map(function(item) {
			return item.id;

		});
		dispatch({
				type: "SUBMIT_ORDER_START",
			});
console.log(productIds,"ggggggggggggggggggggg");
API.post("/orders", {
	args: {
	 				name: order.name,
	 				address: order.address,
	 				city: order.city,
	 				state: order.state,
					zipcode: order.zipCode,
	 				products: productIds,

				},
				})
				.then((res) => {
								if (res.data) {
									console.log("submitOrder(success)",res);
									dispatch({
										type: "SUBMIT_ORDER_SUCCESS",
										data: res.data,
										order,
									});
								}
								else {
									console.log("submitOrder(error)",res);

									dispatch({
										type: "SUBMIT_ORDER_FAILURE",
										error: res.error,
									});
								}
							})
							.catch((error) => {
								dispatch({
									type: "SUBMIT_ORDER_FAILURE",
									error: "Something went wrong, please refresh",
								});
							});
					};
				}
