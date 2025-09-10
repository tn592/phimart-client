import bgImg from "../../assets/images/banner-image-bg.jpg";
// eslint-disable-next-line react/prop-types
const CarouselSlide = ({title, subtitle, image}) => {
	return (
		<section
			className="w-full h-[650px] bg-cover bg-center flex justify-center item-center px-8"
			style={{ backgroundImage: `url(${bgImg})` }}
		>
			<div className="max-w-6xl flex items-center justify-between px-8">
				{/*Left Content*/}
				<div className="w-1/2">
					<h1 className="text-5xl font-bold text-gray-900">
						{title}
					</h1>
					<p className="text-gray-600 my-4">{subtitle}</p>
					<button className="btn btn-secondary px-6 py-3 rounded-full shadow-md">
						Shop Product
					</button>
				</div>

				{/*right image*/}
				<div className="w-1/2 flex justify-center">
					<img
						className="max-w-md drop-shadow-lg"
						src={image}
						alt=""
					/>
				</div>
			</div>
		</section>
	);
};

export default CarouselSlide;
