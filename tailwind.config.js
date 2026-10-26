/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#08090D',
        surface: {
          DEFAULT: '#0F1117',
          light: '#161922',
          card: '#12141D',
          hover: '#1A1E29'
        },
        primary: {
          DEFAULT: '#5B7CFF',
          hover: '#4A6CEE',
          glow: 'rgba(91, 124, 255, 0.35)'
        },
        secondary: {
          DEFAULT: '#A855F7',
          hover: '#9333EA',
          glow: 'rgba(168, 85, 247, 0.35)'
        },
        dark: {
          border: 'rgba(255, 255, 255, 0.08)',
          'border-hover': 'rgba(91, 124, 255, 0.35)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"Fira Code"', 'Consolas', 'monospace']
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
        'hero-gradient': 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(91, 124, 255, 0.15), transparent 70%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
      },
      animation: {
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
