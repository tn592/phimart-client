import OrderCard from "../components/Orders/OrderCard";

const Orders = () => {
	const orders = [
		{
			id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
			user: 1,
			status: "Not Paid",
			total_price: 0,
			created_at: "2025-10-03T05:53:26.543Z",
			items: [
				{
					id: 1,
					product: {
						id: 1,
						name: "string",
						price: 23.43,
					},
					price: 0,
					quantity: 2,
					total_price: 431,
				},
				{
					id: 2,
					product: {
						id: 2,
						name: "string",
						price: 45.54,
					},
					price: 0,
					quantity: 2,
					total_price: 234,
				},
			],
		},
	];
	return (
		<div className="container mx-auto py-8 px-4">
			<h1 className="text-2xl font-bold mb-6">Order Details</h1>
			{orders.map((order) => (
				<OrderCard key={order.id} order={order} />
			))}
		</div>
	);
};

export default Orders;
