export default {
	// Default Loading
	loading: '~/components/App/Loader.vue',

	// Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
	ssr: true,

	// Target: https://go.nuxtjs.dev/config-target
	target: 'server',

	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		htmlAttrs: {
			lang: 'es'
		},
		bodyAttrs: {
			// class: ['dark-mode', 'mobile']
		},
		title: 'Nicolás Arce | Front-end Developer',
		meta: [
			{ charset: 'UTF-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: 'Mi nombre es Nicolás Arce, vivo en Santiago de Chile y me especializo en el Desarrollo de sitios web a medida, siendo una persona autodidacta, espontánea y muy perfeccionista.' },
			{ name: 'format-detection', content: 'telephone=no' },
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
			{
				rel: 'preload',
				href: 'https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;700&family=Open+Sans:wght@400;600&display=swap',
				as: 'style',
				onload: "this.rel='stylesheet'"
			},
			{
				rel: 'preload',
				href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css',
				as: 'style',
				onload: "this.rel='stylesheet'"
			}
		],
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: ['~assets/scss/_reset', '~assets/scss/main'],

	// Global SCSS
	styleResources: {
		scss: [
			'~assets/scss/_variables.scss',
			'~assets/scss/_mixins.scss',
		]
	},

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
		{ src: '~plugins/viewport.js', mode: 'client' },
		{ src: '~plugins/scrollto.js', mode: 'client' },
	],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/eslint
		'@nuxtjs/eslint-module',
		'@nuxtjs/style-resources',
		'@nuxt/image',
		'@unlighthouse/nuxt',
		'@nuxtjs/google-analytics'
	],

	image: {
		domains: ['via.placeholder.com']
	},

	// Middleware to images
	serverMiddleware: [
		{path: '/', handler: '~/server/middleware/redirect.js'},
		{path: '/_ipx', handler: '~/server/middleware/ipx.js'}
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		// https://go.nuxtjs.dev/axios
		'@nuxtjs/axios',
		// https://go.nuxtjs.dev/pwa
		'@nuxtjs/pwa',
	],

	// Axios module configuration: https://go.nuxtjs.dev/config-axios
	axios: {
		// Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
		baseURL: '/',
	},

	// PWA module configuration: https://go.nuxtjs.dev/pwa
	pwa: {
		manifest: {
			lang: 'es',
			name: 'Portafolio Nicolás Arce',
			theme_color: '#12181f'
		},
	},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
		loaders: {
			sass: {
				implementation: require('sass'),
			},
			scss: {
				implementation: require('sass'),
			},
		}
	},

	googleAnalytics: {
		id: 'G-HWRBSNZ3VP'
	}
}