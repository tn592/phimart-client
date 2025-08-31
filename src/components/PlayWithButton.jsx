import { useState } from "react";
import Alert from "./Alert";
import Button from "./Button";

const PlayWithButton = () => {
	// const handleClick = () => console.log("Button Clicked");
	const [alertVisible, setAlertVisible] = useState(false);
	return (
		<div>
			{alertVisible && (
				<Alert color="success" onClose={() => setAlertVisible(false)}>
					You have clicked the button
				</Alert>
			)}
			<Button
				className="font-bold"
				handleClick={() => setAlertVisible(true)}
				color="primary"
			>
				Click Me
			</Button>
		</div>
	);
};

export default PlayWithButton;
