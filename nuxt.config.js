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
        content:
          "Zeynel'in kişisel sitesi. Javascript ve kütüphanelerini öğrenme sürecinde edindiğim bilgileri paylaştığım sitemdir. Bu site NuxtJS ile geliştirildi.",
      },
      { name: 'author', content: 'Zeynel KOZAK' },
      // Twitter
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Zeynel KOZAK - Frontend Developer',
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content:
          "Zeynel'in kişisel sitesi. Javascript ve kütüphanelerini öğrenme sürecinde edindiğim bilgileri paylaştığım sitemdir. Bu site NuxtJS ile geliştirildi.",
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary',
      },
      // Open Graph
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Zeynel KOZAK - Frontend Developer',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          "Zeynel'in kişisel sitesi. Javascript ve kütüphanelerini öğrenme sürecinde edindiğim bilgileri paylaştığım sitemdir. Bu site NuxtJS ile geliştirildi.",
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: '~/static/profile.jpg',
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website',
      },
    ],
    link: [
      {
        rel: 'canonical',
        href: 'https://zkozak.online',
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
