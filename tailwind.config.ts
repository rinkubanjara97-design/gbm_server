import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#FAF7F2',
        foreground: '#1C1917',
        marble: {
          50: '#FAF8F5',
          100: '#F4EFE6',
          200: '#E7DDD0',
          300: '#D5C4B0',
          400: '#BF8E61',
          500: '#A36F3D',
          600: '#86542D',
          700: '#693E23',
          800: '#4D2B1A',
          900: '#321B12',
        },
        gold: {
          50: '#FDFBF0',
          100: '#FBF5D5',
          200: '#F5E69C',
          300: '#EDD463',
          400: '#E4C036',
          500: '#D4AF37', // Muted Luxury Gold
          600: '#C59B27',
          700: '#A1781B',
          800: '#825D19',
          900: '#6C4C19',
        },
        maroon: {
          50: '#FDF2F4',
          100: '#FCE7EB',
          200: '#F9D1D9',
          300: '#F4ABBB',
          400: '#EB7A94',
          500: '#DF476E',
          600: '#C62B54',
          700: '#851C36',
          800: '#5C1B2E',
          900: '#4A1525', // Royal Deep Maroon
        },
      },
      fontFamily: {
        serif: ['var(--font-cinzel)', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['var(--font-jakarta)', 'Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(180deg, rgba(28,25,23,0.7) 0%, rgba(28,25,23,0.4) 60%, rgba(28,25,23,0.85) 100%)',
        'gold-gradient': 'linear-gradient(135deg, #D4AF37 0%, #F5E69C 50%, #C59B27 100%)',
      },
    },
  },
  plugins: [],
}
export default config
