import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor: {
        'light': '#FCF8F3',
        'medium': '#FFF3E3',
        'dark': '#B88E2F'

      },
      colors: {
        'brown': '#B88E2F',
        'grey': '#666666',
        'black': '#000000',
        'white': '#FFFFFF'

      },
      fontSize: {
        'sm': '14px',
        'md': '20px',
        'lg': '24px',
        'xl': '28px',
        '2xl': '38px'
      }
    },
  },
  plugins: [],
}
export default config
