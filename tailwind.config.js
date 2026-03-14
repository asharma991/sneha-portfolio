/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,svelte}'],
  theme: {
    extend: {
      colors: {
        paper: '#fffdf5',
        ink: '#261c1d',
        peach: '#ffd7be',
        sunflower: '#ffd84d',
        warm: '#fff3d8',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
        note: ['"Caveat"', 'cursive'],
      },
      boxShadow: {
        card: '0 12px 24px rgba(38, 28, 29, 0.12)',
      },
    },
  },
  plugins: [],
}
