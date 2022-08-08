import React from "react";

interface ButtonProps {
	children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
	return (
		<button
			className="flex justify-center items-center gap-2 relative bg-slate-900 dark:bg-sky-500 text-white text-lg hover:bg-opacity-80 dark:hover:bg-opacity-80 rounded-lg group transition duration-150"
			{...rest}
		>
			{children}
		</button>
	);
};

export default Button;
