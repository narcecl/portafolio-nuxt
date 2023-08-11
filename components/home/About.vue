<template>
	<section id="home-about" v-viewport="ga" class="section">
		<div class="container">
			<div class="row total align-items-center">
				<div v-viewport data-animation="fadeInLeft" class="col-12 col-sm-5">
					<figure class="hidden-caption full circle" style="width: 400px;height: 400px;;">
						<nuxt-img src="/images/narce-2.jpg" alt="Retrato Nicolás Arce" width="500" height="350" quality="80" loading="lazy" />
						<figcaption>Retrato Nicolás Arce</figcaption>
					</figure>
				</div>
				<div v-viewport data-animation="fadeInRight" class="col-12 col-sm-7">
					<h2 class="heading--2 mb-16">Acerca de <mark>mi</mark></h2>
					<p>
						<mark>Desde el 2012</mark> llevo dedicando gran parte de mi tiempo al <mark>Desarrollo web y a Internet</mark>, amando cada cosa de lo que hago, aprendiendo día a día y mejorando constantemente.<br><br>
						El <mark>desarrollo web</mark> comenzó como un hobby, pero rápidamente me di cuenta de que había descubierto una pasión y desde entonces no he parado de aprender.
						<br><br>
						En mis tiempos libres me dedico a la <mark>Fotografía</mark>, especialmente de retrato.
						También me encanta el anime y los videojuegos (principalmente en PC y Nintendo Switch).
					</p>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'About',
	methods: {
		ga: function(){
			this.$store.dispatch('googleAnalytics', {
				pageTitle: 'Acerca de mi',
				page_path: '/about'
			});
		}
	}
}
</script>