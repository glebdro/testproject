export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'server',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'testproject',
    htmlAttrs: {
      lang: 'en'
    },
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

  proxy: {
    '/external': {
      target: 'http://185.204.109.250:8000',
      pathRewrite: { '^/external': '/chat_analysis/' },
      changeOrigin: true
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/node_modules/bootstrap/dist/css/bootstrap.min.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    // '@nuxtjs/auth-next',
  ],
  
  loading: {color: '#3b8070'},

  axios: {
    baseURL: 'http://185.204.109.250:8000',
  },
  // auth: {
  //   localStorage: false,
  //   cookie: {
  //     options: {
  //       expires: 7
  //     }
  //   },
  //   strategies: {
  //     local: {
  //       endpoints: {
  //         login: { url: '/api/v1/jwt/create', method: 'post', propertyName: false },
  //         logout: false,
  //         user: { url: '/admin/', method: 'get', propertyName: false }
  //       }
  //     }
  //   }
  // },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
