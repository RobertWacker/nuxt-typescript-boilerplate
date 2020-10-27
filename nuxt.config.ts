import { NuxtConfig } from '@nuxt/types';

const config: NuxtConfig = {
  /**
   * Define the server connection variables for your application
   * @see https://ru.nuxtjs.org/guides/configuration-glossary/configuration-server
   */
  server: {
    port: process.env.PORT,
    host: process.env.HOST,
  },

  /**
   * The source directory of your Nuxt.js application
   * @see https://nuxtjs.org/api/configuration-srcdir
   */
  srcDir: 'src/',

  /**
   * Server-side rendering enabled
   * @See https://ru.nuxtjs.org/guides/configuration-glossary/configuration-ssr
   */
  ssr: true,

  /**
   * Option to change default nuxt target for your project 'server'/'static'
   * @see https://ru.nuxtjs.org/guides/configuration-glossary/configuration-target
   */
  target: 'server',

  /**
   * Define all default meta for your application
   * @see https://ru.nuxtjs.org/guides/configuration-glossary/configuration-head
   */
  head: {
    title: 'Nnuxt-typescript-boilerplate',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        hid: 'description',
        name: 'description',
        content: '{{ description }}',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          '//fonts.googleapis.com/css?family=Roboto:100,200,300,400,500,700,400italic|Material+Icons',
      },
    ],
  },

  /**
   * Modules are Nuxt.js extensions which can extend it's core functionality and add endless integrations
   * @see https://ru.nuxtjs.org/guides/configuration-glossary/configuration-modules
   */
  modules: ['@nuxtjs/axios'],

  /**
   * Different options using the axios property
   * @see https://axios.nuxtjs.org/options/
   */
  axios: {
    // Used as fallback if no runtime config is provided
    baseURL: process.env.API_URL,
  },

  /**
   * All the paths defined in the plugins property will be imported before initializing the main application.
   * @see https://nuxtjs.org/api/configuration-plugins
   */
  plugins: ['@/plugins/axios-accessor'],

  /**
   * Auto import components
   * @See https://nuxtjs.org/api/configuration-components
   */
  components: true,

  buildModules: ['@nuxt/typescript-build',],

  /**
   * Customize the progress bar color
   * @see https://ru.nuxtjs.org/guides/configuration-glossary/configuration-loading
   */
  loading: { color: '#448aff' },

  /**
   * This option lets you define the CSS files, modules, and libraries you want to include globally (on every page).
   * @see https://nuxtjs.org/api/configuration-css
   */
  css: ['~/assets/main.sass'],

  /**
   * Build configuration
   * @see https://nuxtjs.org/api/configuration-build
   */
  build: {
    // Nuxt.js use webpack-bundle-analyzer to let you visualize your bundles and how to optimize them.
    analyze: true,
    // Enables CSS Source Map support. Only for dev env
    // ! add env
    cssSourceMap: true,
    // ! add env
    devtools: true,
  },
};


export default config;
