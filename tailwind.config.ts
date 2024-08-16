import type { Config } from 'tailwindcss'

export default <Partial<Config>> {
  content: [],
  darkMode: 'media',
  theme: {
    extend: {
    }
  },
  plugins: [require('tailwindcss-primeui')]
}
