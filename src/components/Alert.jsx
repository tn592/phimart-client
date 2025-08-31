import { CircleX } from "lucide-react";
// eslint-disable-next-line react/prop-types
const Alert = ({ color = "info", children, onClose }) => {
	const alertStyles = {
		success: "bg-green-100 text-green-700 border-green-500",
		error: "bg-red-100 text-red-700 border-red-500",
		warning: "bg-yellow-100 text-yellow-700 border-yellow-500",
		info: "bg-blue-100 text-blue-700 border-blue-500",
	};

	// if (!visible) return null;

	return (
		<div
			className={`p-4 flex items-center justify-between rounded-sm ${alertStyles[color]}`}
		>
			<span>{children}</span>
			<button onClick={() => onClose()}>
				<CircleX className="text-blue-700 hover:text-blue-700" />
			</button>
		</div>
	);
};

export default Alert;
