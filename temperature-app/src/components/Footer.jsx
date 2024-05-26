import React from "react";
import Button from "./Button";

const Footer = ({ onDecrease, onIncrease }) => {
	return (
		<div className="w-full flex justify-center gap-10 p-4 bg-gray-200 rounded shadow-md">
			<button
				onClick={onDecrease}
				className="bg-red-500 text-white px-8 py-2 rounded shadow mr-2"
			>
				Down
			</button>
			<button
				onClick={onIncrease}
				className="bg-green-500 text-white px-8 py-2 rounded shadow"
			>
				Up
			</button>
			{/* <Button
				onClick={onIncrease}
				btnColor={"bg-blue-500"}
				textColor={"text-white"}
			>
				{" + 1"}
			</Button> */}
		</div>
	);
};

export default Footer;
