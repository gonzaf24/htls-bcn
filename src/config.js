export const locales = ['es', 'en']

export const pathnames = {
  '/': '/',
  '/bar': {
    es: '/bar',
    en: '/bar'
  },
  '/entertainment': {
    es: '/entretenimiento',
    en: '/entertainment'
  },
  '/food': {
    es: '/comida',
    en: '/food'
  },
  '/tops': {
    es: '/tops',
    en: '/tops'
  }
}

export const localePrefix = undefined

export const AppPathnames = Object.keys(pathnames)
