<template>
	<section v-viewport="ga" class="section">
		<div class="container">
			<div class="section__heading mb-48">
				<h2 class="heading--2 mb-8">Mi <mark>experiencia</mark></h2>
				<p>
					He trabajando principalmente en banca digital, participando en el desarrollo de Design Systems con Banco Santander, Banco Falabella y Banco Itaú.<br>
					Puedes conocer toda mi experiencia laboral en mi perfil de <a href="https://www.linkedin.com/in/narcecl/" target="_blank" rel="noreferrer noopener" class="link--regular">LinkedIn</a>.
				</p>
			</div>

			<div v-viewport="initExperience" class="fade-child experience-list" :class="{'experience-list--ready': experienceReady }">
				<div v-for="(item, i) in experienceList" :key="i" class="experience-list__item d-flex child">
					<Card class="w-100 w-lg-45 experience-list__item__cont">
						<picture class="hidden-caption">
							<nuxt-img :src="item.img" :alt="`Logo ${item.name}`" quality="80" />
							<figcaption>Logo {{ item.name }}</figcaption>
						</picture>
						<h3 class="heading--6 fw--bold">{{ item.position }}</h3>
						<p>{{ item.name }} &#x2022; {{ item.description }}</p>

						<List  v-if="item.long_description" class="mt-20">
							<li v-for="(element, index) in item.long_description" :key="index">
								{{ element }}
							</li>
						</List>
					</Card>
				</div>
			</div>

			<div class="mt-72">
				<p data-delay="300" class="text-center mb-12">
					Durante el último tiempo he estado trabajando con las siguientes tecnologías:
				</p>

				<div v-viewport class="logos-list row total mini align-items-center justify-content-center fade-child">
					<div v-for="(item, i) in logos" :key="i" class="logos-list__item col-4 col-sm child">
						<picture class="hidden-caption full">
							<nuxt-img :src="item.img" :alt="`Logo ${item.name}`" width="290" height="102" quality="80" />
							<figcaption>Logo {{item.name}}</figcaption>
						</picture>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'Experience',
	data: function(){
		return {
			experienceReady: false,
			experience: [
				{
					name: 'Banco Itaú Chile',
					position: 'Front-end Developer Senior',
					img: '/images/itau.svg',
					description: 'oct 2022 - Actualmente',
					enabled: true,
					long_description: [
						'Front-end Developer Senior en el equipo de Design Ops del CoE UX.',
						'Encargado del desarrollo y la optimización del nuevo Design System en React.',
						'Responsable de generar y mantener la documentación del Design System para los equipos de desarrollo internos y externos del Banco.',
					],
				},
				{
					name: 'Modyo Chile',
					position: 'Lead Front-end Developer',
					img: '/images/modyo.svg',
					description: 'abr 2022 - sept 2022',
					enabled: false,
					long_description: [
						'Lead Front-end para el equipo de CFG Colombia.',
					],
				},
				{
					name: 'Falabella Financiero',
					position: 'Front-end Developer',
					img: '/images/falabellafinanciero.svg',
					description: 'nov 2021 - abr 2022',
					enabled: true,
					long_description: [
						'Desarrollador Front-end para el sitio público de Banco Falabella (Chile, México, Perú y Colombia).',
						'Apoyo en el desarrollo y mantención de la nueva librería de componentes en React para Perú y Chile.',
						'Apoyo en la optimización y performance de los sitios a nivel de código y semántica.',
					],
				},
				{
					name: 'Banco Santander Chile',
					position: 'Lead Front-end Developer',
					img: '/images/santander.svg',
					description: 'ago 2017 - nov 2021',
					enabled: true,
					long_description: [
						'Lead Front-end Developer para el sitio público.',
						'Encargado del desarrollo y la optimización de la librería de componentes en Vue.',
						'Responsable de generar y mantener la documentación para el equipo de desarrollo.',
						'Participación y apoyo en nuevos desarrollos y requerimientos del banco.',
					],
				}
			],
			logos: [
				{ name: 'VueJS', img: '/images/vuejs.svg'},
				{ name: 'NuxtJS', img: '/images/nuxtjs.svg'},
				{ name: 'React', img: '/images/react.svg'},
				{ name: 'Nuxt.js', img: '/images/nextjs.svg'},
				{ name: 'Laravel', img: '/images/laravel.svg'},
				{ name: 'Modyo', img: '/images/modyo.svg'},
				{ name: 'WordPress', img: '/images/wordpress.svg'}
			]
		};
	},
	computed: {
		experienceList: function(){
			return this.experience.filter(item => item.enabled);
		},
	},
	methods: {
		ga: function(){
			this.$store.dispatch('googleAnalytics', {
				pageTitle: 'Mi experiencia',
				page_path: '/experience'
			});
		},
		initExperience: function(){
			this.experienceReady = true;
		}
	},
}
</script>

<style lang="scss" scoped>
.logos-list{
	&__item{
		picture{
			padding: 10px;
			border-radius: 10px;

			img{
				filter: grayscale(100%);
				@include transition;
				max-height: 30px;
			}

			&:hover{
				img{
					filter: none;
				}
			}
		}
	}
}

.experience-list{
	position: relative;

	&:after{
		width: 5px;
		height: 0;
		border-radius: 8px;
		content: "";
		background: $primary-color;
		left: 24px;
		right: auto;
		position: absolute;
		margin: auto;
		top: 200px;
		transition: all 1s ease;
		z-index: 1;
		display: none;

		@media screen and (min-width: $break-xl){
			display: block;
			left: 0;
			right: 0;
		}
	}
	
	&--ready{
		&:after{
			height: calc(100% - 400px);
		}
	}

	&__item{
		z-index: 2;
		position: relative;
		margin-top: 16px;

		@media screen and (min-width: $break-xl){
			+ .experience-list__item{
				margin-top: -48px;
			}
		}

		&:nth-child(even){
			justify-content: flex-end;

			> div{
				&:after{
					left: -59px;
					right: auto;

					@media screen and (min-width: $break-xl){
						left: -66px;
					}
				}
			}
		}

		&__cont{
			padding: 32px 24px !important;

			&:after{
				content: "";
				width: 20px;
				height: 20px;
				background: $primary-color;
				position: absolute;
				border-radius: 100%;
				right: -59px;
				z-index: 1;
				top: 0;
				bottom: 0;
				margin: auto;
				display: none;

				@media screen and (min-width: $break-xl){
					right: -66px;
				}
			}

			@media screen and (min-width: $break-md){
				padding: 32px 20px;

				&:after{
					display: block;
				}
			}

			picture{
				margin-bottom: 32px;

				img{
					height: 40px;
					width: auto;
				}
			}
		}
	}
}

.dark{
	.logos-list{
		&__item{
			picture{
				img{
					filter: brightness(0) invert(1);
					&:hover{
						opacity: .5;
					}
				}
			}
		}
	}
	.experience-list{
		&__item{
			&__cont{
				picture{
					img{filter: brightness(0) invert(1);}
				}
			}
		}
	}
}
</style>