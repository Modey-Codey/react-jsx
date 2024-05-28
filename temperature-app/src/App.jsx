import React, { useState } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

const App = () => {
	const [temperature, setTemperature] = useState(25); // Initial temperature value
	const [isOn, setIsOn] = useState(true); // Initial visibility state

	const decreaseTemperature = () => setTemperature((prevTemp) => prevTemp - 1);
	const increaseTemperature = () => setTemperature((prevTemp) => prevTemp + 1);
	const toggleIsOn = () => setIsOn(!isOn);

	// const toggleIsOn2 = () => {
	// 	setIsOn(!isOn);
	// 	setTemperature(25);
	// };

	// const reset = () => {
	// 	setTemperature(25);
	// 	setIsOn(true);
	// };

	return (
		<div className="flex flex-col items-center justify-center h-screen bg-gray-100">
			<Header
				temperature={temperature}
				isOn={isOn}
				toggleIsOn={toggleIsOn}
				// toggleIsOn={toggleIsOn2}
			/>

			<Content temperature={temperature} />

			{/* {isOn ? (
				<Content temperature={temperature} />
			) : (
				<div className="flex items-center justify-center w-full p-6 mb-4 bg-white rounded shadow-md h-2/3"></div>
			)} */}

			<Footer
				onDecrease={decreaseTemperature}
				onIncrease={increaseTemperature}
				// onReset={reset}
			/>
		</div>
	);
};

export default App;
