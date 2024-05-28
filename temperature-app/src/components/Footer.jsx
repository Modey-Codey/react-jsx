import React from "react";
import MyButton from "./MyButton"; // import custom button <Button></Button>

const Footer = ({ onDecrease, onIncrease, onReset }) => {
	
	
	return (
		<div className="flex justify-center w-full gap-10 p-4 bg-gray-200 rounded shadow-md">
			<button
				onClick={onDecrease}
				className="px-8 py-2 mr-2 text-white bg-red-500 rounded shadow"
			>
				Down
			</button>
			<button
				onClick={onIncrease}
				className="px-8 py-2 text-white bg-green-500 rounded shadow"
			>
				Up
			</button>

			<MyButton
				// onClick={onIncrease}
				btnColor={"bg-blue-500"}
				textColor={"text-white"}
			>
				{"default MyButton : alert()"}
			</MyButton>

			<MyButton
				onClick={onIncrease}
				btnColor={"bg-gray-800"}
				textColor={"text-yellow-400"}
			>
				{"+ 1°C"}
			</MyButton>

			<MyButton
				onClick={onReset}
				btnColor={"bg-orange-700"}
				textColor={"text-white"}
			>
				{"Reset"}
			</MyButton>
		</div>
	);
};

export default Footer;
