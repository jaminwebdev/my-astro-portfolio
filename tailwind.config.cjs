/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: {
                    light: '#66adff',
                    medium: '#3172bc',
                    dark: '#0c478c',
                },
                secondary: '#28c4ac',
                'body-text': {
                    dark: '#2f495e',
                    light: '#fafaff',
                },
                'body-color': {
                    light: '#fafaff',
                    'light-secondary': '#edf2f7',
                    dark: '#2B4255',
                    'dark-secondary': '#334E66',
                },
            },
        },
    },
    plugins: [
        plugin(function ({ addUtilities }) {
            addUtilities({
                '.perspective-400': {
                    perspective: '400rem',
                },
                '.rotate-y-65': {
                    transform: 'rotateY(65deg)',
                },
                '.origin-left-center': {
                    'transform-origin': 'left center',
                },
            });
        }),
    ],
};
