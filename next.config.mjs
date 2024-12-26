/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en-US', 'es-ES'],
    defaultLocale: 'es-ES'
  },
  env: {
    APP_NAME: process.env.APP_NAME,
    API_URL_LOCAL: process.env.APP_API_URL_LOCAL,
    API_URL_PROD: process.env.APP_API_URL_PROD
  }
}

export default nextConfig
