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
        background: '#F7F4EF',
        foreground: '#2B2723',
        'marble-white': '#F7F4EF',
        'stone-grey': '#E4DDCF',
        basalt: '#2B2723',
        'sandstone-red': {
          DEFAULT: '#A63D2F',
          50: '#FBF2F1',
          100: '#F6E3E0',
          200: '#ECC4BF',
          300: '#DF9B92',
          400: '#CF6C60',
          500: '#A63D2F',
          600: '#8C3125',
          700: '#6F261C',
          800: '#541C15',
          900: '#3A130E',
        },
        'vein-gold': {
          DEFAULT: '#B8924A',
          50: '#FAF7F0',
          100: '#F2EBDC',
          200: '#E4D5B4',
          300: '#D4BB87',
          400: '#C7A563',
          500: '#B8924A',
          600: '#9B7737',
          700: '#7B5B2A',
          800: '#5D431F',
          900: '#412E15',
        },
        'vein-green': {
          DEFAULT: '#4A5D53',
          100: '#EBF0ED',
          500: '#4A5D53',
          900: '#232D28',
        },
      },
      fontFamily: {
        serif: ['var(--font-fraunces)', 'Fraunces', 'Georgia', 'serif'],
        sans: ['var(--font-jakarta)', 'Plus Jakarta Sans', 'Inter', 'sans-serif'],
        mono: ['var(--font-ibm-mono)', 'IBM Plex Mono', 'monospace'],
      },
      borderRadius: {
        none: '0',
        sm: '2px',
        DEFAULT: '4px',
        md: '4px',
        lg: '6px',
        xl: '8px',
        '2xl': '12px',
        full: '9999px',
      },
    },
  },
  plugins: [],
}
export default config
