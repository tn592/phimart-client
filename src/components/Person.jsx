import { useState } from "react";
const Person = () => {
	// ["Something", false]	we can't define useState inside any if block
	const [person, setPerson] = useState("Something");
	// const [visible, setVisible] = useState(false);
	const handleClick = () => {
		setPerson("John");
		console.log(person);
	};
	console.log(person)
	return (
		<div className="m-5">
			<button
				onClick={handleClick}
				className="px-3 py-2 bg-blue-500 text-white rounded-sm"
			>
				Click Me
			</button>
		</div>
	);
};

export default Person;
