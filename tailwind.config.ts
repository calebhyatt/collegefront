import { type Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

export default {
	content: ['./components/**/*.tsx', './src/**/*.tsx'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['var(--font-sans)', ...fontFamily.sans]
			}
		}
	},
	darkMode: 'class',
	plugins: []
} satisfies Config
