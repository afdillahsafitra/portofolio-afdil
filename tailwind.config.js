/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html'],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Plus Jakarta Sans', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            colors: {
                darkBg: '#0D0F12',
                cardBg: '#161B22',
                cardHover: '#1C2128',
                accentViolet: '#6366F1',
                accentCyan: '#22D3EE',
            },
            boxShadow: {
                glowViolet: '0 0 25px -5px rgba(99, 102, 241, 0.4)',
                glowCyan: '0 0 25px -5px rgba(34, 211, 238, 0.4)',
            },
        },
    },
};
