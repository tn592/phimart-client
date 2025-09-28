import { useEffect } from "react";
import useCartContext from "../hooks/useCartContext";

const Cart = () => {
	const { createCart } = useCartContext();
	useEffect(() => {
		createCart();
	}, []);
	return <div>This is Cart Page</div>;
};

export default Cart;
