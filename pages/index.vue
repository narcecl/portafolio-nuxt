<template>
	<div>
		<main>
			<HomeHero />
			<HomeAbout />
			<HomeProjects />
		</main>

		<AppFooter />
	</div>
</template>

<script>
export default {
	name: 'IndexPage',
	mounted: function(){
		this.$nextTick(() => {
			setTimeout(() => this.$nuxt.$loading.finish(), 500);
		});
	}
}
</script>