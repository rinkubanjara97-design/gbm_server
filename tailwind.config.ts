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
        background: '#FAF8F5',
        foreground: '#1A1A1A',
        'warm-white': '#FAF8F5',
        'stone-subtle': '#F2EFE9',
        charcoal: {
          DEFAULT: '#1A1A1A',
          hover: '#292929',
          light: '#242424',
        },
        terracotta: {
          DEFAULT: '#B08968',
          hover: '#987253',
          light: '#F5EFEA',
        },
        hairline: '#E5E2DC',
      },
      fontFamily: {
        serif: ['var(--font-fraunces)', 'Fraunces', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['var(--font-jakarta)', 'Plus Jakarta Sans', 'Inter', 'sans-serif'],
        mono: ['var(--font-ibm-mono)', 'IBM Plex Mono', 'monospace'],
      },
      borderRadius: {
        none: '0',
        sm: '2px',
        DEFAULT: '4px',
        md: '6px',
        lg: '8px',
        xl: '12px',
        '2xl': '16px',
        full: '9999px',
      },
    },
  },
  plugins: [],
}
export default config
