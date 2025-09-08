import book from "../../assets/images/book.png";
import bgImg from "../../assets/images/banner-image-bg.jpg";
const CarouselSlide = () => {
	return (
		<section className="w-full h-[650px]">
			<div
				style={{ backgroundImage: `url(${bgImg})` }}
				className="max-w-6xl flex items-center justify-between px-8"
			>
				{/*Left Content*/}
				<div className="w-1/2">
					<h1 className="text-5xl font-bold text-gray-900">
						The Fine Print Book Collections
					</h1>
					<p className="text-gray-600 my-4">This is heading</p>
					<button className="btn btn-secondary px-6 py-3 rounded-full shadow-md">
						Shop Product
					</button>
				</div>

				{/*right image*/}
				<div className="w-1/2 flex justify-center">
					<img
						className="max-w-md drop-shadow-lg"
						src={book}
						alt=""
					/>
				</div>
			</div>
		</section>
	);
};

export default CarouselSlide;
