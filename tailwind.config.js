/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', './assets/**/*.{js,css}'],
  theme: {
    extend: {
      aspectRatio: {
        '2/1': '2 / 1',
      },
      screens: {
        'mobile-m': '375px', // Tambahkan breakpoint khusus
        'mobile-l': '425px', // Tambahkan breakpoint khusus
      },
      flexGrow: {
        2: '2',
      },
      boxShadow: {
        behind:
          '30px 30px 0 rgba(0, 0, 0, 0), 15px 15px 0 rgba(255, 255, 255, 0.1)',
        'behind-hover':
          '45px 45px 0 rgba(0, 0, 0, 0.6), 25px 25px 0 rgba(255, 255, 255, 0.3)',
      },
      fontFamily: {
        pixelmono: ['DeterminationMono', 'monospace'],
        pixelsans: ['DeterminationSans', 'sans-serif'],
      },
      keyframes: {
        typing: {
          '0%': { width: '0%' },
          '70%': { width: '100%' },
          '100%': { width: '0%' },
        },
        blink: {
          '50%': { borderColor: 'transparent' },
        },
      },
      animation: {
        typing: 'typing 4s steps(12, end) infinite',
        blink: 'blink 0.5s step-end infinite',
        'spin-slow': 'spin 3s linear infinite',
      },
    },
  },
  plugins: [],
}
