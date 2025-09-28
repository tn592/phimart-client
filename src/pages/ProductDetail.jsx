import AddToCartButton from "../components/ProductDetails/AddToCartButton";
import ProductImageGallery from "../components/ProductDetails/ProductImageGallery";

const ProductDetail = () => {
	const product = {
		id: 40,
		name: "Fantasy Novel",
		description: "High-quality fantasy novel for everyday use.",
		price: 347.72,
		stock: 101,
		category: 4,
		price_with_tax: 382.49,
		images: [
			{
				id: 2,
				image: "https://res.cloudinary.com/dedj65xds/image/upload/v1757610811/inu32r0ex9zbuoom0n19.webp",
			},
			{
				id: 3,
				image: "https://res.cloudinary.com/dedj65xds/image/upload/v1758978401/xrcvhs50dyqgf4o8yzky.jpg",
			},
		],
	};
	return (
		<div className="w-3/4 mx-auto px-4 py-8">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
				<ProductImageGallery
					images={product.images}
					ProductName={product.name}
				/>
				<div className="mt-auto">
					<AddToCartButton product={product} />
				</div>
			</div>
		</div>
	);
};

export default ProductDetail;
