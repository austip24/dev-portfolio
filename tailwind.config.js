/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				'main-dark': 'url("/imgs/backgrounds/dark.svg")',
				'main-light': 'url("/imgs/backgrounds/light.svg")',
			},
		},
	},
	plugins: [],
};
