/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],

	theme: {
		extend: {
			colors: {
				background: '#F3F2F7',
				body: '#464A53',
				primary: '#7F63F4'
			}
		}
	},
	darkMode: 'class',
	plugins: [require('flowbite/plugin')]
};
