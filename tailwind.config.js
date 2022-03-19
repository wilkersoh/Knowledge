const defaultTheme = require("tailwindcss/defaultTheme");

let containerScreens = Object.assign({}, defaultTheme.screens);
delete containerScreens["2xl"];

module.exports = {
	mode: "jit",
	darkMode: "class",
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				"black-grey": "#0e141b",
			},
			container: {
				padding: "2rem",
				screens: containerScreens,
			},
		},
	},
	plugins: [],
};
