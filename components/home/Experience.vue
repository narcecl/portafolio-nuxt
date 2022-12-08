<template>
	<section v-viewport="ga" class="section bg--secondary">
		<div class="container">
			<div class="section__heading mb-48">
				<h2 class="heading--2 mb-8">Mi <mark>experiencia</mark></h2>
				<p>
					A lo largo de mi carrera profesional he trabajado en empresas de tecnología, agencias de publicidad y grandes compañías del rubro financiero.<br>
					Puedes conocer toda mi experiencia laboral en mi perfil de <a href="https://www.linkedin.com/in/narcecl/" target="_blank" rel="noreferrer noopener" class="link--regular">LinkedIn</a>.
				</p>
			</div>

			<div v-viewport="initExperience" class="fade-child experience-list" :class="{'experience-list--ready': experienceReady }">
				<div v-for="(item, i) in experience" :key="i" class="experience-list__item d-flex child">
					<AppCard class="w-100 w-lg-45 experience-list__item__cont">
						<picture class="hidden-caption">
							<nuxt-img :src="item.img" :alt="`Logo ${item.name}`" quality="80" />
							<figcaption>Logo {{ item.name }}</figcaption>
						</picture>
						<h3 class="heading--6 fw--bold">{{ item.position }}</h3>
						<p>{{ item.name }}</p>
						<p class="f--sm mt-16" v-text="item.description"></p>
					</AppCard>
				</div>
			</div>

			<div class="mt-72">
				<p data-delay="300" class="text-center mb-12">
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
			experienceReady: false,
			experience: [
				{
					name: 'Banco Itaú Chile',
					position: 'Front-end Developer Senior',
					img: '/images/itau.svg',
					description: 'oct 2022 - Actualmente'
				},
				{
					name: 'Modyo Chile',
					position: 'Lead Front-end Developer',
					img: '/images/modyo.svg',
					description: 'abr 2022 - sept 2022'
				},
				{
					name: 'Falabella Financiero',
					position: 'Front-end Developer',
					img: '/images/falabellafinanciero.svg',
					description: 'nov 2021 - abr 2022'
				},
				{
					name: 'Banco Santander Chile',
					position: 'Lead Front-end Developer',
					img: '/images/santander.svg',
					description: 'ago 2017 - nov 2021'
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
		},
		initExperience: function(){
			console.log('wawa');
			this.experienceReady = true;
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
	position: relative;

	&:after{
		width: 5px;
		height: 0;
		border-radius: 8px;
		content: "";
		display: block;
		background: $primary-color;
		left: 24px;
		right: auto;
		position: absolute;
		margin: auto;
		top: 108px;
		transition: all 1s ease;
		z-index: 1;

		@media screen and (min-width: $break-xl){
			left: 0;
			right: 0;
		}
	}
	
	&--ready{
		&:after{
			height: calc(100% - 215px);
		}
	}

	&__item{
		margin-bottom: 16px;
		z-index: 2;
		position: relative;

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
			padding: 20px 16px;

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