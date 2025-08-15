import { defineConfig } from 'tailwindcss';

export default defineConfig({
  theme: {
    extend: {
      colors: {
        orange: {
          DEFAULT: '#FF6F20',
          light: '#FF9E4A',
          dark: '#C65A00',
        },
        white: '#FFFFFF',
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in',
        fadeOut: 'fadeOut 0.5s ease-out',
        bounce: 'bounce 1s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15%)' },
        },
      },
    },
  },
  plugins: [],
});