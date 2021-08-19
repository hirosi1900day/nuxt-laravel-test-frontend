export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'test',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/axios',
    '@nuxtjs/auth',
  ],
  axios : {
    proxy: true,
    baseURL: 'http://localhost:8080'
 },

 proxy :
  { "/api/": { target: 'http://localhost:8080' } }
,

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  auth:{
    localStorage: false,
    strategies:{
      local:{
        tokenType:'bearer',
        endpoints:{
          login:{
            url:'http://localhost:8080/api/login',
            method:'post',
            propertyName:'access_token'
          },
          logout:{
            url:'http://localhost:8080/api/logout',
            method:'post',
          },
          register:{
            url:'http://localhost:8080/api/register',
            method:'post',
          },
          user:{
            url:'http://localhost:8080/api/me',
            method:'get',
            propertyName:false
          }
        }
      },
      // redirect: {
      //   login: '/login',
      //   logout: '/',
      //   callback: '/login',
      //   home: '/home'
      // },
    }
  }
}
