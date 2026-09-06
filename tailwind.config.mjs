/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdb,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Poppins"', 'sans-serif'],
      },
      colors: {
        brand: {
          DEFAULT: '#0066ff',
          hover: '#0052cc',
          light: '#e6f0ff',
        }
      },
      keyframes: {
        'gradient-move': {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
        'marquee': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      },
      animation: {
        'gradient-move': 'gradient-move 1s ease-out forwards',
        'marquee': 'marquee 25s linear infinite',
      },
    },
  },
  plugins: [],
}
