/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			textColor: {
				'welcome-header': 'var(--welcome-header)',
				'welcome-paragraph': 'var(--welcome-paragraph)',
				'navigation-text': 'var(--navigation-text)',
				'navigation-text-hover': 'var(--navigation-text-hover)',
				'watermark-text': 'var(--watermark-text)',
				'toggle-icon': 'var(--toggle-icon)',
			},
			backgroundColor: {
				'theme-bg': 'var(--theme-bg)',
				'toggle-bg': 'var(--toggle-bg)',
			},
			borderColor: {
				'theme-border': 'var(--theme-border)',
			},
		},
	},
	plugins: [],
};
