import { useEffect } from "react";
import useCartContext from "../hooks/useCartContext";

const Cart = () => {
	const { cart, createOrGetCart } = useCartContext();
	useEffect(() => {
		console.log("Create or Get");
		createOrGetCart();
	}, [createOrGetCart]);
	return <div>{JSON.stringify(cart)}</div>;
};

export default Cart;
