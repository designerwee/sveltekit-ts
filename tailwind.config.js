/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		container: {
			center: true,
			padding: '2rem',
		},
		extend: {
			colors: {
				dark: '#1B1E28',
				darker: '#1A1C23',
				light: '#E7E9EB',
				lighter: '#FCFCFD',
				gray: { DEFAULT: '#808080' },
				silver: { DEFAULT: '#C0C0C0' },
				slategray: { DEFAULT: '#708090' },
				yellow: { DEFAULT: '#FFFF00' },
				gold: { DEFAULT: '#FFD700' },
				orange: { DEFAULT: '#FFA500' },
				orangered: { DEFAULT: '#ff4500' },
				tomato: { DEFAULT: '#FF6347' },
				red: { DEFAULT: '#FF0000' },
				blue: { DEFAULT: '#0000FF' },
				skyblue: { DEFAULT: '#87CEEB' },
				dodgerblue: { DEFAULT: '#1E90FF' },
				indigo: { DEFAULT: '#4f46e5' },
				green: { DEFAULT: '#008000' },
				yellowgreen: { DEFAULT: '#9ACD32' },
			},
			fontFamily: {
				exo2: ["'Exo 2', sans-serif"],
				inter: ["'Inter', sans-serif"],
				pt: ["'PT Serif', serif"],
				notokr: ["'Noto Sans KR', sans-serif"],
			},
		},
	},
	// eslint-disable-next-line @typescript-eslint/no-require-imports
	plugins: [require('tailwindcss-debug-screens'), require('@tailwindcss/container-queries')],
};
