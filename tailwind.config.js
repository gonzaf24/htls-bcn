/** @type {import('tailwindcss').Config} */
// tailwind.config.js
const { nextui } = require('@nextui-org/react')

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx,css,scss}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        50: '#FFF5FB',
        100: '#FCEBF5',
        200: '#FACAE4',
        300: '#F5ABCF',
        400: '#F073A3',
        500: '#e83b68',
        600: '#D13058',
        700: '#AD2142',
        800: '#8C152F',
        900: '#690C1E',
        950: '#42050F'
      },
      layout: {
        spacingUnit: 4,
        disabledOpacity: 0.5,
        dividerWeight: '1px',
        fontSize: {
          tiny: '0.75rem',
          small: '0.875rem',
          medium: '1rem',
          large: '1.125rem'
        },
        lineHeight: {
          tiny: '1rem',
          small: '1.25rem',
          medium: '1.5rem',
          large: '1.75rem'
        },
        radius: {
          small: '8px',
          medium: '12px',
          large: '14px'
        },
        borderWidth: {
          small: '1px',
          medium: '2px',
          large: '3px'
        }
      }
    }
  },
  plugins: [
    nextui({
      prefix: 'nextui',
      addCommonColors: false,
      defaultTheme: 'light',
      defaultExtendTheme: 'light',
      layout: {},
      themes: {
        light: {
          layout: {
            hoverOpacity: 0.8,
            boxShadow: {
              small:
                '0px 0px 5px 0px rgb(0 0 0 / 0.02), 0px 2px 10px 0px rgb(0 0 0 / 0.06), 0px 0px 1px 0px rgb(0 0 0 / 0.3)',
              medium:
                '0px 0px 15px 0px rgb(0 0 0 / 0.03), 0px 2px 30px 0px rgb(0 0 0 / 0.08), 0px 0px 1px 0px rgb(0 0 0 / 0.3)',
              large:
                '0px 0px 30px 0px rgb(0 0 0 / 0.04), 0px 30px 60px 0px rgb(0 0 0 / 0.12), 0px 0px 1px 0px rgb(0 0 0 / 0.3)'
            }
          },
          colors: {
            background: '#FFFFFF', // or DEFAULT
            foreground: '#11181C', // or 50 to 900 DEFAULT
            primary: {
              // ... 50 to 900
              foreground: '#FFFFFF',
              DEFAULT: '#006FEE'
            }
          }
        },
        dark: {
          layout: {
            hoverOpacity: 0.9,
            boxShadow: {
              small:
                '0px 0px 5px 0px rgb(0 0 0 / 0.05), 0px 2px 10px 0px rgb(0 0 0 / 0.2), inset 0px 0px 1px 0px rgb(255 255 255 / 0.15)',
              medium:
                '0px 0px 15px 0px rgb(0 0 0 / 0.06), 0px 2px 30px 0px rgb(0 0 0 / 0.22), inset 0px 0px 1px 0px rgb(255 255 255 / 0.15)',
              large:
                '0px 0px 30px 0px rgb(0 0 0 / 0.07), 0px 30px 60px 0px rgb(0 0 0 / 0.26), inset 0px 0px 1px 0px rgb(255 255 255 / 0.15)'
            }
          },
          colors: {
            background: '#000000', // or DEFAULT
            foreground: '#ECEDEE', // or 50 to 900 DEFAULT
            primary: {
              // ... 50 to 900
              foreground: '#FFFFFF',
              DEFAULT: '#006FEE'
            }
          }
        },
        'purple-dark': {
          extend: 'dark', // <- inherit default values from dark theme
          colors: {
            background: '#0D001A',
            foreground: '#ffffff',
            primary: {
              50: '#3B096C',
              100: '#520F83',
              200: '#7318A2',
              300: '#9823C2',
              400: '#c031e2',
              500: '#DD62ED',
              600: '#F182F6',
              700: '#FCADF9',
              800: '#FDD5F9',
              900: '#FEECFE',
              DEFAULT: '#DD62ED',
              foreground: '#ffffff'
            },
            focus: '#F182F6'
          },
          layout: {
            disabledOpacity: '0.3',
            radius: {
              small: '4px',
              medium: '6px',
              large: '8px'
            },
            borderWidth: {
              small: '1px',
              medium: '2px',
              large: '3px'
            }
          }
        }
      }
    })
  ]
}
