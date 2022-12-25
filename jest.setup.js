import { Nuxt, Builder } from "nuxt";
import nuxtConfig from "./nuxt.config";

const path = require('path');
const glob = require('glob');
const Vue = require('vue');

glob.sync(path.join(__dirname, './components/**/*.vue')).forEach((file) => {
	const name = file.match(/(\w*)\.vue$/)[1];
	Vue.component(name, require(file).default);
});

global.Vue = Vue;

const resetConfig = {
	loading: false,
	loadingIndicator: false,
	fetch: {
		client: false,
		server: false,
	},
	features: {
		store: true,
		layouts: false,
		meta: false,
		middleware: false,
		transitions: false,
		deprecations: false,
		validate: false,
		asyncData: false,
		fetch: false,
		clientOnline: false,
		clientPrefetch: false,
		clientUseUrl: false,
		componentAliases: false,
		componentClientOnly: false,
	},
	build: {
		indicator: false,
		terser: false,
	},
};
const config = Object.assign({}, nuxtConfig, resetConfig, {
	srcDir: nuxtConfig.srcDir,
	ignore: ["**/components/**/*", "**/layouts/**/*", "**/pages/**/*"],
});

const buildNuxt = async () => {
	const nuxt = new Nuxt(config);
	await new Builder(nuxt).build();
	return nuxt;
};

module.exports = async () => {
	const nuxt = await buildNuxt();
	process.env.buildDir = nuxt.options.buildDir;
};