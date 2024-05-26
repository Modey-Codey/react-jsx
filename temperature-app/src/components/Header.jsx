import React from "react";

const Header = ({ temperature, isOn, toggleIsOn }) => {
	return (
		<div className="w-full p-4 bg-blue-500 text-white rounded shadow-md mb-4 flex justify-between items-center px-20">
			<button
				onClick={toggleIsOn}
				className="bg-white text-blue-500 px-4 py-2 rounded shadow"
			>
				ON / OFF
			</button>
			{isOn && (
				<span className="ml-4 font-bold text-2xl">
					Current Temperature: {temperature}°C
				</span>
			)}
		</div>
	);
};

export default Header;
