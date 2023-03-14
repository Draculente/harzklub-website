/** @type {import('tailwindcss').Config} */
// const withMT = require("@material-tailwind/html/utils/withMT");

// module.exports = withMT();

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],

	theme: {
		extend: {
			borderRadius: {
				'4xl': '20px'
			},
			backgroundImage: {
				'berglinie': 'url("/images/berglinie.png")',
				'berglinie-small': "url('/images/berglinie-mobil.png')"
			},
			aspectRatio: {
				'4/3': '4 / 3',
			},
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
			'dark-grey': '#484848',
			'light-grey': '#A7A7A7',
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
			'bunker': {
				'50': '#f3f3f4',
				'100': '#e8e8e9',
				'200': '#c5c5c7',
				'300': '#a1a3a5',
				'400': '#5b5d62',
				'500': '#15181E',
				'600': '#13161b',
				'700': '#101217',
				'800': '#0d0e12',
				'900': '#0a0c0f'
			}
		},
		fontFamily: {
			sans: ['Manrope', 'sans-serif']
		},
		screens: {
			
			'2xs': { 'max': '500px' },

			'xs': { 'max': '640px' },

			'sm': { 'max': '768px' },
			// => @media (min-width: 640px) { ... }

			'md': { 'max': '1024px' },
			// => @media (min-width: 768px) { ... }

			'lg': { 'max': '1280px' },
			// => @media (min-width: 1024px) { ... }

			'xl': { 'max': '1536px' },
			// => @media (min-width: 1280px) { ... }

			'2xl': { 'min': '1536px' },
			// => @media (min-width: 1536px) { ... }
			'big': "1024px"
		}
	},
	plugins: [require("@tailwindcss/typography"), require("daisyui")],
	daisyui: {
		styled: true,
		base: true,
		utils: true,
		logs: true,
		rtl: false,
		prefix: "",
		darkTheme: "dark",
		themes: [
			{
				"light": {

					"primary": "#43790D",

					"primary-content": "#ffffff",

					"secondary": "#374A24",

					"secondary-content": "#ffffff",

					"accent": "#1FB2A5",

					"neutral": "#CECECE",

					"base-100": "#F8FAFF",

					"base-300": "#D9D9D9",

					"base-200": "#E6E6E6",

					"base-content": "#212121",

					"info": "#ffffff",

					"info-content": "rgb(75 85 99)",

					"success": "#36D399",

					"warning": "#FBBD23",

					"error": "#DE4343",

					"error-content": "#ffffff",
				},
			},
			{
				"dark": {

					"primary": "#43790D",

					"primary-content": "#ffffff",

					"secondary": "#374A24",

					"secondary-content": "#ffffff",

					"accent": "#1FB2A5",

					"neutral": "#CECECE",

					"base-100": "#15181E",

					"base-content": "#EEEEEE",

					"info": "#222730",

					"info-content": "rgb(209 213 219)",

					"success": "#36D399",

					"warning": "#FBBD23",

					"error": "#DE4343",

					"error-content": "#ffffff",
				},
			},
		],

	},
}