// PascalCasing

const FirstComponent = () => {
	const name = "Phitron";
	const sum = (a, b) => a+b;
	return (
		<>
			<h1 className="text-xl font-bold text-red-500">Hello {name || "world"}</h1>
			<p>Your mark is {sum(5, 43)}</p>
		</>
	);
};

export default FirstComponent;
