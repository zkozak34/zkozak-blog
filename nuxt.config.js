export default {
  target: 'static',
  head: {
    title: 'Zeynel KOZAK - Frontend Developer',
    htmlAttrs: {
      lang: 'tr',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Zeynel KOZAK Bloğu- Frontend Developer',
      },
    ],
    // link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://zkozak.online',
  },
  buildModules: ['@nuxt/postcss8', '@/modules/siteMapGenerator'],
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxt/content', '@nuxtjs/sitemap'],
}
