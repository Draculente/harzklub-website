/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/html/utils/withMT");

module.exports = withMT({
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			borderRadius: {
				'4xl': '20px'
			},
			backgroundImage: {
				'berglinie': 'url("/images/berglinie.png")'
			}
		},
		//https://javisperez.github.io/tailwindcolorshades/
		colors: {
			'green': {
				'50': '#f6f8f3',
				'100': '#ecf2e7',
				'200': '#d0dec3',
				'300': '#b4c99e',
				'400': '#7ba156',
				'500': '#43790d',
				'600': '#3c6d0c',
				'700': '#325b0a',
				'800': '#284908',
				'900': '#213b06'
			},
			'light-blue': '#F8FAFF',
			'lime': {
				'50': '#f5f6f4',
				'100': '#ebede9',
				'200': '#cdd2c8',
				'300': '#afb7a7',
				'400': '#738066',
				'500': '#374a24',
				'600': '#324320',
				'700': '#29381b',
				'800': '#212c16',
				'900': '#1b2412'
			},
			'light-brown': '#E6E6E6',
		},
		fontFamily: {
			sans: ['Manrope', 'sans-serif']
		}
	},
	plugins: [],
});
