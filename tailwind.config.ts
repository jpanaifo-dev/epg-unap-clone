import type { Config } from 'tailwindcss'
import { nextui } from '@nextui-org/react'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        lg: '1.5rem'
      }
    },
    colors: {
      primary: {
        DEFAULT: '#0070f3',
        50: '#F3F7FF',
        100: '#D3E9FF',
        200: '#B0D8FF',
        300: '#7AC3FF',
        400: '#3B9FFF',
        500: '#0E75FF',
        600: '#004FFF',
        700: '#002CD2',
        800: '#081B5E',
        dark: '#003e9e'
      },
      secondary: {
        DEFAULT: '#CBB427',
        50: '#FBFBEB',
        100: '#F6F6CB',
        200: '#EEED9A',
        300: '#E4DD60',
        400: '#DACA35',
        500: '#CBB427',
        600: '#BC9A22',
        700: '#8C691C',
        800: '#74551F',
        900: '#64471F'
      },
      DarkTan: {
        DEFAULT: '#A01414',
        50: '#FFF1F1',
        100: '#FFE1E1',
        200: '#FFC7C7',
        300: '#FFA0A0',
        400: '#FF6A6A',
        500: '#F83B3B',
        600: '#E61C1C',
        700: '#C11414',
        800: '#A01414',
        900: '#641212'
      }
    }
  },
  darkMode: 'class',
  plugins: [
    nextui({
      addCommonColors: true,
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: '#0070f3',
              50: '#F3F7FF',
              100: '#D3E9FF',
              200: '#B0D8FF',
              300: '#7AC3FF',
              400: '#3B9FFF',
              500: '#0E75FF',
              600: '#004FFF',
              700: '#002CD2',
              800: '#081B5E'
            }
          }
        }
      }
    })
  ]
}
export default config
