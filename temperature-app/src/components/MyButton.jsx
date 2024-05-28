import React from "react";

// Note: default parameter for onClick is alert("MyButton is clicked")

const MyButton = ({
	onClick = () => alert("MyButton is clicked"),
	children,
	btnColor,
	textColor,
}) => {
	return (
		<button
			onClick={onClick}
			className={`px-8 py-2 text-lg first:font-semibold rounded transition-all   shadow-[2px_2px_0px_black] active:shadow-none active:translate-x-[3px] active:translate-y-[3px]  ${btnColor} ${textColor}`}
		>
			{children}
		</button>
	);
};

export default MyButton;
