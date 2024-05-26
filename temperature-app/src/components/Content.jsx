import React from "react";
import Temperature from "./Temperature";

const Content = ({ temperature }) => {
	return (
		<div className="bg-white p-6 rounded shadow-md mb-4 w-full flex justify-center items-center h-2/3">
			<Temperature temperature={temperature} />
		</div>
	);
};

export default Content;
