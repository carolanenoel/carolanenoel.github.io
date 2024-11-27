/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primaryNeutral: 'var(--primary-neutral)',
				primaryDark: 'var(--primary-dark)',
				primaryLight: 'var(--primary-light)',
				secondaryNeutral: 'var(--secondary-neutral)',
				terciaryNeutral: 'var(--terciary-neutral)',
				clrDark: 'var(--black)',
				clrGrayLight: 'var(--gray-light)',
				clrGray: 'var(--gray)',
				clrWhite: 'var(--white)',
			},
			fontFamily: {
				cormorantInfant: ['Cormorant Infant', 'serif'],
				palanquin: ['Palanquin', 'sans-serif'],
			},
			backgroundImage: {
				'livreimg': "url('/livreillu.png')",
			}
		},
	},
	plugins: [],
}
