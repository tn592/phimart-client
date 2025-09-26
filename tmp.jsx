// // PascalCasing

// const FirstComponent = () => {
// 	return (
// 		<div>
// 			<h1>Hello World</h1>
// 			<p>Ki khobor!</p>
// 		</div>
// 	);
// };

// export default FirstComponent;


// PascalCasing

// const FirstComponent = () => {
// 	const name = "Phitron";
// 	if (name) {
// 		return (
// 			<>
// 				<h1>Hello {name} </h1>
// 				<p>Ki khobor!</p>
// 			</>
// 		);
// 	}
// 	return (
// 		<>
// 			<h1>Hello World </h1>
// 			<p>Ki khobor!</p>
// 		</>
// 	);
// };

// export default FirstComponent;


// PascalCasing

// const FirstComponent = () => {
// 	const name = "Phitron";
// 	return (
// 		<>
// 			<h1>Hello {name ? name : "world"}</h1>
// 			<p>Ki khobor!</p>
// 		</>
// 	);
// };

// export default FirstComponent;


// PascalCasing

// const FirstComponent = () => {
// 	const name = "Phitron";
// 	const content = name ? name : "World"
// 	return (
// 		<>
// 			<h1>Hello {content}</h1>
// 			<p>Ki khobor!</p>
// 		</>
// 	);
// };

// export default FirstComponent;


// const List = () => {
// 	const fruits = [
// 		"Apple",
// 		"Banana",
// 		"Orange",
// 		"Grapes",
// 		"Mango",
// 		"Pine Apple",
// 	];
// 	// fruits.map((fruit) => console.log(fruit))
// 	return (
// 		<div>
// 			<ul className="pl-6 list-decimal">
// 				{fruits.map((fruit) => {
// 					return <li onClick={(event) => console.log(event)} key={fruit}>{fruit}</li>;
// 				})}
// 			</ul>
// 		</div>
// 	);
// };

// export default List;

// const List = () => {
// 	const fruits = [
// 		"Apple",
// 		"Banana",
// 		"Orange",
// 		"Grapes",
// 		"Mango",
// 		"Pine Apple",
// 	];
// 	// fruits.map((fruit) => console.log(fruit))
// 	const handleItemPrint = () => console.log("Clicked");
// 	return (
// 		<div>
// 			<ul className="pl-6 list-decimal">
// 				{fruits.map((fruit) => {
// 					return <li onClick={handleItemPrint} key={fruit}>{fruit}</li>;
// 				})}
// 			</ul>
// 		</div>
// 	);
// };

// export default List;

// () => handleItemPrint(fruit) call-back function

// const List = () => {
// 	const fruits = [
// 		"Apple",
// 		"Banana",
// 		"Orange",
// 		"Grapes",
// 		"Mango",
// 		"Pine Apple",
// 	];
// 	// fruits.map((fruit) => console.log(fruit))
// 	let selectedIndex = -1;
// 	const handleItemPrint = (index) => {
// 		selectedIndex = index;
// 		console.log(selectedIndex);
// 	};
// 	return (
// 		<div>
// 			<ul className="pl-6 list-decimal">
// 				{fruits.map((fruit, index) => {
// 					return (
// 						<li
// 							className={
// 								selectedIndex === index
// 									? "bg-blue-500 p-3 rounded-sm m-3"
// 									: ""
// 							}
// 							onClick={() => handleItemPrint(index)}
// 							key={fruit}
// 						>
// 							{fruit}
// 						</li>
// 					);
// 				})}
// 			</ul>
// 		</div>
// 	);
// };

// export default List;


// import { useState } from "react";
// const List = () => {
// 	const fruits = [
// 		"Apple",
// 		"Banana",
// 		"Orange",
// 		"Grapes",
// 		"Mango",
// 		"Pine Apple",
// 	];

// 	const [selectedIndex, setSelectedIndex] = useState(-1);
// 	// const [name, setName] = useState("");

// 	// fruits.map((fruit) => console.log(fruit))
// 	// const handleItemPrint = (index) => {
// 	// 	selectedIndex = index;
// 	// 	console.log(selectedIndex);
// 	// };
// 	return (
// 		<div>
// 			<ul className="pl-6 list-decimal">
// 				{fruits.map((fruit, index) => {
// 					return (
// 						<li
// 							className={
// 								selectedIndex === index
// 									? "bg-blue-500 p-3 rounded-sm m-3"
// 									: ""
// 							}
// 							onClick={() => setSelectedIndex(index)}
// 							key={fruit}
// 						>
// 							{fruit}
// 						</li>
// 					);
// 				})}
// 			</ul>
// 		</div>
// 	);
// };

// export default List;

