import bgImg from "../../assets/images/banner-image-bg-1.jpg";
import bannerImg from "../../assets/images/banner-image3.png";
const DiscountSection = () => {
	return (
		<section
			className="w-full h-[600px] bg-cover bg-center flex justify-center item-center px-4 md:px-8"
			style={{ backgroundImage: `url(${bgImg})` }}
		>
			<div className="container w-full flex flex-col md:flex-row items-center justify-between px-4 md:px-8">
				{/*Left Image*/}
				<div className="max-w-md md:w-1/2 flex justify-center">
					<img className="w-2/3 md:w-full" src={bannerImg} />
				</div>

				{/*right content*/}
				<div className="w-full md:w-1/2 text-center md:text-left mb-2 md:mb-0">
					<h1 className="text-4xl md:text-5xl font-bold text-gray-900">
						30% Discount On All Items. Hurry Up!!!
					</h1>
					{/*CountDown Timer*/}
					<div className="flex justify-center md:justify-start space-x-8 text-2xl font-semibold my-6">
						<div>
							<span className="text-3xl text-pink-500">24</span>
							<br />
							Days
						</div>
						<div>
							<span className="text-3xl text-pink-500">23</span>
							<br />
							Hrs
						</div>
						<div>
							<span className="text-3xl text-pink-500">36</span>
							<br />
							Min
						</div>
						<div>
							<span className="text-3xl text-pink-500">56</span>
							<br />
							Sec
						</div>
					</div>
					<button className="btn btn-secondary px-6 py-3 rounded-full shadow-md">
						Shop Collection
					</button>
				</div>
			</div>
		</section>
	);
};

export default DiscountSection;
