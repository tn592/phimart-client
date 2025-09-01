import { useState } from "react";
const Person = () => {
	// const personObj = {
	// 	firstName: "Mr.",
	// 	lastName: "X",
	// 	email: "mail@example.com"
	// };
	// const [firstName, setFirstName] = useState("")
	// const [lastName, setLastName] = useState("")
	// const [person, setPerson] = useState(personObj);
	const [person, setPerson] = useState({
		firstName: "Mr.",
		lastName: "X",
		email: "mail@example.com",
		address: {
			city: "Mirpur",
			state: "Dhaka"
		}
	});
	const handleClick = () => {
		// setFirstName("Mr.");
		// setLastName("X");
		// const newPerson = { firstName: "John", lastName: "Doe", email: "mail@example.com"};
		const newPerson = {
			...person,
			// firstName: "John",
			// lastName: "Doe",
			address:{
				...person.address, city: "Dhanmondi"
			}
		};
		setPerson(newPerson);
	};
	return (
		<div className="m-5">
			{/*<h1>{firstName} {lastName}</h1>*/}
			<h1>
				{person.firstName} {person.lastName} {person.email}
			</h1>
			<p>{person.address.city}, {person.address.state}</p>
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
