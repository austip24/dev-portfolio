import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { AnimatePresence, motion } from "framer-motion";
import { SunIcon, MoonIcon } from "@heroicons/react/solid";

const ThemeToggle = () => {
	const { theme, setTheme } = useTheme();
	const [isDark, setIsDark] = useState<boolean>();

	useEffect(() => {
		setIsDark(theme === "dark");
	}, [theme]);

	const toggleTheme = () => {
		setTheme(isDark ? "light" : "dark");
	};

	return (
		<AnimatePresence exitBeforeEnter initial={false}>
			<motion.button
				key={theme}
				className="p-2 bg-indigo-900 hover:bg-indigo-800 dark:bg-amber-300 dark:hover:bg-amber-400 rounded-lg transition-colors duration-200"
				onClick={toggleTheme}
				initial={{ y: -10, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				exit={{ y: 10, opacity: 0 }}
				transition={{ duration: 0.2 }}
				name="Theme Toggle"
			>
				{isDark ? (
					<SunIcon className="h-4 w-4 fill-slate-900" />
				) : (
					<MoonIcon className="h-4 w-4 fill-slate-100" />
				)}
			</motion.button>
		</AnimatePresence>
	);
};

export default ThemeToggle;
