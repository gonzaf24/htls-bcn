export const locales = ['es', 'en']

export const pathnames = {
  '/': '/',
  '/food': {
    es: '/comida',
    en: '/food'
  },
  '/bar': {
    es: '/bar',
    en: '/bar'
  },
  '/entertainment': {
    es: '/entretenimiento',
    en: '/entertainment'
  },
  '/tops': {
    es: '/tops',
    en: '/tops'
  }
}

export const localePrefix = undefined

export const AppPathnames = Object.keys(pathnames)
