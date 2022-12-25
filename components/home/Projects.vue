<template>
	<section v-viewport="ga" class="section">
		<div class="container">
			<div v-viewport data-animation="fadeInDown" class="section__heading mb-48">
				<h2 class="heading--2 mb-8">Mis <mark>proyectos</mark></h2>
				<p>
					Aquí puedes ver un poco de lo que he estado trabajando en el último tiempo.<br>
					Si prefieres, puedes ver todos mis desarrollos en mi perfil de <a href="https://github.com/narcecl" target="_blank" rel="noreferrer noopener" class="link--regular">GitHub</a>.
				</p>
			</div>

			<div v-viewport data-delay="300" class="row total mini fade-child">
				<div v-for="(project, i) in projects" :key="i" class="col-12 col-sm-6 col-lg-4 child">
					<Card class="project">
						<figure class="hidden-caption full project__image">
							<nuxt-img :src="project.image" :alt="`Logo ${project.name}`" width="520" height="300" loading="lazy" />
							<figcaption>Vista previa del proyecto ${project.name}</figcaption>
						</figure>
						<div class="project__info mt-12">
							<div class="project__info__lang mb-24">
								<LangList :langs="project.langs" />
							</div>
							<h3 class="heading--6 fw--bold mb-4" v-text="project.name"></h3>
							<p class="project__info__desc f--small" v-text="project.description"></p>

							<div class="project__info__actions">
								<div class="btn--holder d-flex">
									<Button 
										v-for="(button, bi) in project.links"
										:key="bi"
										:href="button.url"
										target="_blank"
										:type="button.type"
										:text="button.text"
										:full="button.full"
										:icon="button.icon"
										:icon-order="button.iconOrder"
									/>
								</div>
							</div>
						</div>
					</Card>
				</div>
			</div>

			<ClickToAction
				v-viewport
				data-delay="300"
				data-animation="fadeInDown"
				class="mt-60"
				title="¿Te gusta o te ha servido mi trabajo?"
				description="Estoy constantemente desarrollando aplicaciones, snippets o componentes (generalmente en Vue)."
				icon="mug-hot"
			>
				<a href="https://ko-fi.com/narcecl" class="link--regular fw--bold f-14" rel="noreferrer noopener" target="_blank">
					Regalame un café
					<font-awesome-icon class="ml-8" :icon="['fas', 'chevron-right']" aria-hidden="true" />
				</a>
			</ClickToAction>
		</div>
	</section>
</template>

<script>
export default {
	name: 'Projects',
	data: function(){
		return {
			projects: [
				{
					name: 'Pokédex',
					description: 'Desarrollo de Pokédex con la lista de todos los Pokémon por generación.',
					image: '/images/pokedex.jpg',
					langs: ['NUXT JS', 'VUE', 'HTML5', 'CSS3'],
					links: [
						{type: 'github', text: '', url: 'https://github.com/narcecl/pokedex', icon: 'code'},
						{type: 'primary', text: 'Ir al proyecto', url: 'https://narcecl.github.io/pokedex/', full: true, icon: 'arrow-up-right-from-square', iconOrder: 2}
					]
				},
				{
					name: 'Portafolio 2022',
					description: 'Desarrollo de portafolio personal en NuxtJS.',
					image: '/images/portafolio-22.jpg',
					langs: ['NUXT JS', 'VUE', 'HTML5', 'CSS3'],
					links: [{type: 'github', text: 'Ver en Github', url: 'https://github.com/narcecl/portafolio-nuxt', full: true, icon: 'code'}]
				},
				{
					name: 'Grids Planner',
					description: 'Organizador visual para el Feed de Instagram.',
					image: '/images/grids-planner.jpg',
					langs: ['VUE', 'HTML5', 'CSS3'],
					links: [
						{type: 'github', text: '', url: 'https://github.com/narcecl/grids-planner', icon: 'code'},
						{type: 'primary', text: 'Ir al proyecto', url: 'https://grids-planner.herokuapp.com/', full: true, icon: 'arrow-up-right-from-square', iconOrder: 2}
					]
				},
				// {
				//     name: 'Vue Accesibilidad',
				//     description: 'Un componente transversal que permite aplicar accesibilidad visual en una web.',
				//     image: '/images/accesibilidad.jpg',
				//     langs: ['VUE', 'HTML5', 'CSS3'],
				//     links: [{type: 'github', text: 'Ver en Github', url: 'https://github.com/narcecl/vue-accesibilidad', full: true, icon: 'code'}]
				// }
			]
		};
	},
	methods: {
		ga: function(){
			this.$store.dispatch('googleAnalytics', {
				pageTitle: 'Mis proyectos',
				page_path: '/projects'
			});
		}
	}
}
</script>

<style lang="scss" scoped>
.project{
	padding: 16px;
	border-radius: 8px;
	background: #fff;
	border: 1px solid #eee;
	@include transition;

	&__image{
		border-radius: 8px;
		overflow: hidden;
	}

	&__info{
		&__desc{
			min-height: 42px;
		}

		&__actions{
			margin-top: 32px;

			a{
				+ a{margin-left: 8px;}
			}
		}
	}
}

.dark{
	.project{
		background: #242424;
		border-color: transparent;
	}
}
</style>