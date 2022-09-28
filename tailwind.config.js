/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				"kyrrex-green": "#009571",
				"bumblebee-amber": "#FF8C00",
				"malibu-blue": "#6694FF",
				"seanse-purple": "#AB47BC",
				"amaranth-pink": "#EB2E57",
				"lily-light": "#F6F7F8",
				"mine-dark": "#323232",
				"edward-gray": "#A9B3AE",
				"alto-light": "#D6D6D6",
			},
			fontFamily: {
				poppins: ["Poppins"],
			},
		},
	},
	plugins: [],
};
