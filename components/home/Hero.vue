<template>
    <section class="main-section">
        <div class="d-flex align-items-center justify-content-center h-100">
            <div class="container">
                <div class="w-100 w-sm-80 text-center center">
                    <figure class="mb-60">
                        <img src="~static/narce-logo.png" alt="Nicolás Arce" width="215" height="29">
                    </figure>

                    <h1>¿Tienes una <mark>idea</mark> en mente? <span>perfecto, yo me encargo del resto</span></h1>
                    <div class="mt-16 w-100 w-sm-90 center">
                        <p>
                            Mi nombre es <mark>Nicolás Arce</mark>, vivo en Santiago de Chile, soy <mark>Desarrollador Front-end</mark> y me especializo en el <mark>Desarrollo web a medida</mark>, siendo una persona autodidacta, espontánea y muy perfeccionista.
                            <br><br>
                            <mark>Desde el 2012</mark> llevo dedicando gran parte de mi tiempo al <mark>Desarrollo web y a Internet</mark>, amando cada cosa de lo que hago, aprendiendo día a día y mejorando constantemente.
                            <br><br>
                            Escríbeme a través de mis redes sociales para saber más de mi o simplemente saludarme :)
                        </p>
                    </div>

                    <div v-if="socials.length" class="sociales mt-32">
                        <ul>
                            <li v-for="(item, index) in socials" :key="index">
                                <a :href="item.href">
                                    <figure>
                                        <img width="36" height="36" :alt="item.name" :src="item.icon">
                                    </figure>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default{
    name: 'HomeHero',
    data: () => {
		return {
			socials: [
				{name: 'Email', href: 'mailto:hola@narce.cl', icon: 'https://icongr.am/fontawesome/envelope-square.svg?size=36&color=ffffff'},
				{name: 'Facebook', href: 'https://www.facebook.com/narcecl/', icon: 'https://icongr.am/fontawesome/facebook-square.svg?size=36&color=ffffff'},
				{name: 'Twitter', href: 'https://twitter.com/narcecl', icon: 'https://icongr.am/fontawesome/twitter-square.svg?size=36&color=ffffff'},
				{name: 'LinkedIn', href: 'https://www.linkedin.com/in/narcecl/', icon: 'https://icongr.am/fontawesome/linkedin-square.svg?size=36&color=ffffff'},
				{name: 'GitHub', href: 'https://github.com/narcecl', icon: 'https://icongr.am/fontawesome/github-square.svg?size=36&color=ffffff'}
			]
		};
	}
}
</script>

<style lang="scss" scoped>
	.main-section{
        height: 100vh;
        background-image: url(~static/main-bg.jpg);
		background-size: cover;
        background-attachment: fixed;
		position: relative;

		> div{position:relative;z-index:1;}
		&:after{content:"";display:block;width:100%;height:100%;background:rgba(0,0,0,.6);position:absolute;left:0;top:0}

		h1{
            font-size: 38px;
            line-height: 1.2em;
            max-width: 90%;
            margin: 0 auto;
			color:#fff;
            text-transform: uppercase;

			span{
                font-size: 16px;
                display: block;

                @media screen and (min-width: $break-sm){
                    font-size: 28px;
                    letter-spacing: .7px;
                }
            }
		}

		p{
			color:rgba(255,255,255,.8);
			mark{color:#fff;}
		}

		.sociales{
			ul{
				li{
					display: inline-block;
					margin-right: 32px;
					vertical-align: middle;
					@include transition;

					a{font-size:36px;color:#fff;}

					&:hover{opacity:.5}
					&:last-of-type{margin-right:0;}
				}
			}
		}
	}
</style>