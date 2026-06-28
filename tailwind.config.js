/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        norvan: {
          50: '#f8f8f8',
          100: '#f0f0f0',
          200: '#d9d9d9',
          300: '#bfbfbf',
          400: '#8c8c8c',
          500: '#595959',
          600: '#454545',
          700: '#2a2a2a',
          800: '#1a1a1a',
          900: '#0a0a0a',
          accent: '#2563eb',
          accentLight: '#60a5fa',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spray': 'spray 1s ease-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        spray: {
          '0%': { transform: 'translateX(0) scale(0)', opacity: '0.8' },
          '50%': { transform: 'translateX(40px) scale(1)', opacity: '0.4' },
          '100%': { transform: 'translateX(80px) scale(0)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
