import React from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

const ThemeToggle = () => {
	const { theme, setTheme } = useTheme();
	const isDark = theme === "dark";

	console.log("theme toggle rendered");

	const toggleTheme = () => {
		setTheme(isDark ? "light" : "dark");
	};

	// TODO: implement button animation on theme change

	return <button onClick={toggleTheme}>ToggleDarkMode</button>;
};

const MemoizedThemeToggle = React.memo(ThemeToggle);

export default MemoizedThemeToggle;
