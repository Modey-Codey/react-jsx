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

	return (
		<div className="flex flex-col items-center justify-center h-screen bg-gray-100">
			<Header
				temperature={temperature}
				isOn={isOn}
				toggleIsOn={toggleIsOn}
			/>
			<Content temperature={temperature} />
			<Footer
				onDecrease={decreaseTemperature}
				onIncrease={increaseTemperature}
			/>
		</div>
	);
};

export default App;
