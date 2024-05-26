import React from "react";

const Button = ({ onClick, children, btnColor, textColor }) => {
	return (
		<button
			onClick={onClick}
			className={`px-8 py-2 font-semibold rounded transition-all   shadow-[2px_2px_0px_black] active:shadow-none active:translate-x-[3px] active:translate-y-[3px]  ${btnColor} ${textColor}`}
		>
			{children}
		</button>
	);
};

export default Button;
