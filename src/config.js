const locales = ['es', 'en', 'de']

const pathnames = {
  '/': '/',
  '/pathnames': {
    es: '/nombres-ruta',
    en: '/pathnames',
    de: '/pfadnamen'
  },
  '/posts': {
    es: '/publicar',
    en: '/post',
    de: '/beitrag'
  }
}

const localePrefix = undefined

const AppPathnames = Object.keys(pathnames)

module.exports = { locales, pathnames, localePrefix, AppPathnames }
