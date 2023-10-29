/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html'],
	theme: {
		container: {
			center: true,
		},
		colors: {
			darkGray: 'hsl(0, 0%, 55%)',
			veryDarkGray: 'hsl(0, 0%, 41%)',
		},
		extend: {
			fontFamily: {
				Alata: ['Alata', 'sans-serif'],
				JosefinSans: ['JosefinSans', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
