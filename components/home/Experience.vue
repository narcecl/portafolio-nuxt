<template>
	<section v-viewport="ga" class="section bg--secondary">
		<div class="container">
			<div v-viewport data-animation="fadeInDown" class="section__heading mb-48">
				<h2 class="heading--2 mb-16">Mi <mark>experiencia</mark></h2>
				<p>
					A lo largo de mi carrera profesional he trabajado en empresas de tecnología, agencias de publicidad y grandes compañías del rubro financiero.<br>
					Puedes conocer toda mi experiencia laboral en mi perfil de <a href="https://www.linkedin.com/in/narcecl/" target="_blank" rel="noreferrer noopener" class="link--regular">LinkedIn</a>.
				</p>
			</div>

			<div v-viewport data-animation="fadeInDown" data-delay="300" class="experience-list row total mini align-items-center justify-content-center">
				<div v-for="(item, i) in experience" :key="i" class="experience-list__item col-12 col-sm-4">
					<div class="experience-list__item__cont">
						<figure class="hidden-caption">
							<nuxt-img :src="item.img" :alt="`Logo ${item.name}`" width="150" height="40" quality="80" />
							<figcaption>Logo {{ item.name }}</figcaption>
						</figure>
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
					<div v-for="(item, i) in logos" :key="i" class="logos-list__item col-6 col-sm-2 child">
						<figure class="hidden-caption full">
							<nuxt-img :src="item.img" :alt="`Logo ${item.name}`" width="290" height="102" quality="80" />
							<figcaption>Logo {{item.name}}</figcaption>
						</figure>
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
					name: 'Modyo',
					position: 'Front-end Developer',
					img: '/images/logo-6.png',
					description: 'Abr 2022 - Actualmente'
				},
				{
					name: 'Falabella Financiero',
					position: 'Front-end Developer',
					img: '/images/falabellafinanciero.png',
					description: 'Nov 2021 - Abr 2022'
				},
				{
					name: 'Banco Santander',
					position: 'Lead Front-end Developer',
					img: '/images/santander.png',
					description: 'Ago 2017 - Nov 2021'
				}
			],
			logos: [
				{ name: 'VueJS', img: '/images/logo-1.png'},
				{ name: 'NuxtJS', img: '/images/logo-2.png'},
				{ name: 'React', img: '/images/logo-3.png'},
				{ name: 'Laravel', img: '/images/logo-4.png'},
				{ name: 'Modyo', img: '/images/logo-6.png'},
				{ name: 'WordPress', img: '/images/logo-5.png'}
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
		figure{
			padding: 10px;
			border-radius: 10px;

			img{
				filter: grayscale(100%);
				@include transition;
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
			background: #eee;

			@media screen and (min-width: $break-md){
				padding: 32px 20px;
			}

			figure{
				margin-bottom: 32px;
			}
		}
	}
}

.dark{
	.logos-list{
		&__item{
			figure{
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
				background: #1a1a1a;

				figure{
					img{filter: brightness(0) invert(1);}
				}
			}
		}
	}
}
</style>