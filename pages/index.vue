<template>
	<div v-if="ready">
		<main>
			<Cover />
			<About />
			<Experience />
			<Projects />
		</main>

		<AppFooter />
	</div>
</template>

<script>
import cacheControl from '@/helpers/cacheControl';

export default {
	name: 'IndexPage',
	middleware: cacheControl({
		'max-age': 60,
		'stale-when-revalidate': 5
	}),
	data: function(){
		return {
			ready: false
		};
	},
	head: function(){
        return {
            htmlAttrs: {
                class: this.$store.state.darkMode ? 'dark' : null
            }
        }
    },
	mounted: function(){
		// Initial set of color scheme
		this.checkTheme();

		// Listen for changes in the color scheme
		window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', this.checkTheme);

		this.$nextTick(() => {
			// Show the content and remove loader after the first update
			this.ready = true;
			setTimeout(() => this.$nuxt.$loading.finish(), 500);
		});
	},
	methods: {
		checkTheme: function(){
			// Check color scheme and change the store value
			if( window.matchMedia ){
				this.$store.commit('setDark', (window.matchMedia('(prefers-color-scheme: dark)').matches));
			}
		}
	}
}
</script>