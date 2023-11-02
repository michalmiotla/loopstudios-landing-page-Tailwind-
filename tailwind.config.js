/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html'],
	theme: {
		container: {
			center: true,
		},
		extend: {
			colors: {
				darkGray: 'hsl(0, 0%, 55%)',
				veryDarkGray: 'hsl(0, 0%, 41%)',
			},
			fontFamily: {
				Alata: ['Alata', 'sans-serif'],
				JosefinSans: ['Josefin Sans', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
