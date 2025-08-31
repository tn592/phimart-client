import { useState } from "react";
// eslint-disable-next-line react/prop-types
const List = ({items = [], heading}) => {
	// console.log(props);

	const [selectedIndex, setSelectedIndex] = useState(-1);
	// const [name, setName] = useState("");

	return (
		<div>
			<h1 className="text-xl font-bold">{heading}</h1>
			<ul className="pl-6 list-decimal">
				{items.map((fruit, index) => {
					return (
						<li
							className={
								selectedIndex === index
									? "bg-blue-500 p-3 rounded-sm m-3"
									: ""
							}
							onClick={() => setSelectedIndex(index)}
							key={fruit}
						>
							{fruit}
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default List;
