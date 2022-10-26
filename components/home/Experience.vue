<template>
	<section v-viewport="ga" class="section bg--secondary">
		<div class="container">
			<div v-viewport data-animation="fadeInDown" class="section__heading mb-48">
				<h2 class="heading--2 mb-8">Mi <mark>experiencia</mark></h2>
				<p>
					A lo largo de mi carrera profesional he trabajado en empresas de tecnología, agencias de publicidad y grandes compañías del rubro financiero.<br>
					Puedes conocer toda mi experiencia laboral en mi perfil de <a href="https://www.linkedin.com/in/narcecl/" target="_blank" rel="noreferrer noopener" class="link--regular">LinkedIn</a>.
				</p>
			</div>

			<div v-viewport data-animation="fadeInDown" data-delay="300" class="experience-list row total mini align-items-center">
				<div v-for="(item, i) in experience" :key="i" class="experience-list__item col-12 col-sm-6">
					<div class="experience-list__item__cont">
						<picture class="hidden-caption">
							<nuxt-img :src="item.img" :alt="`Logo ${item.name}`" quality="80" />
							<figcaption>Logo {{ item.name }}</figcaption>
						</picture>
						<h3 class="heading--6 fw--bold">{{ item.position }}</h3>
						<p>{{ item.name }}</p>
						<p class="f--sm mt-16" v-text="item.description"></p>
					</div>
				</div>
			</div>

			<div class="mt-72">
				<p v-viewport data-animation="fadeInDown" data-delay="300" class="text-center mb-12">
					Durante el último tiempo he estado trabajado con las siguientes tecnologías:
				</p>

				<div v-viewport class="logos-list row total mini align-items-center justify-content-center fade-child">
					<div v-for="(item, i) in logos" :key="i" class="logos-list__item col-6 col-sm child">
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
	name: 'HomeExperience',
	data: function(){
		return {
			experience: [
				{
					name: 'Banco Itaú Chile',
					position: 'Front-end Developer Senior',
					img: '/images/itau.svg',
					description: 'Oct 2022 - Actualmente'
				},
				{
					name: 'Modyo Chile',
					position: 'Lead Front-end Developer',
					img: '/images/modyo.svg',
					description: 'Abr 2022 - Sept 2022'
				},
				{
					name: 'Falabella Financiero',
					position: 'Front-end Developer',
					img: '/images/falabellafinanciero.svg',
					description: 'Nov 2021 - Abr 2022'
				},
				{
					name: 'Banco Santander Chile',
					position: 'Lead Front-end Developer',
					img: '/images/santander.svg',
					description: 'Ago 2017 - Nov 2021'
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
	methods: {
		ga: function(){
			this.$store.dispatch('googleAnalytics', {
				pageTitle: 'Mi experiencia',
				page_path: '/experience'
			});
		}
	}
}
</script>

<style lang="scss">
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
	&__item{
		&__cont{
			padding: 20px 16px;
			border-radius: 8px;
			background: #fff;
			border: 1px solid #eee;

			@media screen and (min-width: $break-md){
				padding: 32px 20px;
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
				background: #242424;
				border-color: #242424;

				picture{
					img{filter: brightness(0) invert(1);}
				}
			}
		}
	}
}
</style>