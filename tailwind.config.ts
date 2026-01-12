import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{md,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        bg: 'hsl(var(--bg))',
        text: 'hsl(var(--text))',
        muted: 'hsl(var(--muted))',
        accent: 'hsl(var(--accent))',
        card: 'hsl(var(--card))',
        border: 'hsl(var(--border))'
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'serif'],
        body: ['var(--font-body)', 'serif']
      },
      boxShadow: {
        subtle: '0 10px 30px -20px hsl(var(--text) / 0.2)'
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out both'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};

export default config;
