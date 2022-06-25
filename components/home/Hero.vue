<template>
    <section class="hero-section">
        <div class="d-flex align-items-center justify-content-center h-100">
            <div class="container">
                <div class="w-100 w-sm-80 text-center center">
                    <figure v-viewport data-animation="fadeInDown" data-delay="300" class="hidden-caption mb-60">
                        <nuxt-img src="/images/narce-logo.png" alt="Logo Nicolás Arce" width="260" height="31.5" loading="lazy" />
                        <figcaption>Isologo Nicolás Arce</figcaption>
                    </figure>

                    <div v-viewport data-animation="fadeInDown" data-delay="600">
                        <h1>¿Tienes una <mark>idea</mark> en mente? <span>perfecto, yo me encargo del resto</span></h1>
                        <div class="mt-16 w-100 w-sm-90 center">
                            <p class="f--md">Mi nombre es <mark>Nicolás Arce</mark>, vivo en Santiago de Chile, soy <mark>Desarrollador Front-end</mark> y me especializo en el <mark>Desarrollo web a medida</mark>, siendo una persona autodidacta, espontánea y muy perfeccionista.</p>
                        </div>
                    </div>

                    <div class="sociales mt-40">
                        <p v-viewport data-animation="fadeInDown" data-delay="900" class="mb-20">Escríbeme a través de mis redes sociales para saber más de mi o simplemente saludarme :)</p>
                        <AppSocial v-viewport data-delay="1200" class="fade-child" theme="light" icon-type="square" :fade-child="true" />
                    </div>
                </div>
            </div>
        </div>

        <div v-scrollto="'#home-about'" class="scroll-down" tabindex="0">
            <transition name="fade">
                <p v-if="timeout">Haz scroll para ver más contenido abajo.</p>
            </transition>
            <i class="d-inline-block animated animated__infinite animate__bounce fa-solid fa-chevron-down" aria-hidden="true" title="Ir a la siguiente sección"></i>
        </div>
    </section>
</template>

<script>
export default{
    name: 'HomeHero',
    data: function(){
        return {
            timeout: false
        };
    },
    mounted: function(){
        this.$nextTick(() => {
            const scrollTimer = setTimeout(() => {
                this.timeout = true;
            }, 5000);

            document.addEventListener('scroll', () => {
                clearTimeout(scrollTimer);
            });
        });
    }
}
</script>

<style lang="scss" scoped>
	.hero-section{
        height: 100vh;
        background-image: url(~static/images/main-bg.jpg);
		background-size: cover;
        background-attachment: fixed;
		position: relative;

		> div{
            position: relative;
            z-index: 1;
        }

		&:after{
            content: "";
            display: block;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,.7);
            position: absolute;
            left: 0;
            top: 0;
        }

		h1{
            font-size: 38px;
            line-height: 1.1em;
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

        .scroll-down{
            position: absolute;
            left: 0;
            right: 0;
            margin: auto;
            bottom: 20px;
            width: 24px;
            height: 24px;
            cursor: pointer;

            &:focus, &:focus-visible, &:focus-within{
                outline: 1px solid white;
            }

            p{
                width: 280px;
                position: absolute;
                left: -120px;
                top: -52px;
                margin: auto;
                font-size: 14px;
            }

            i{
                font-size: 24px;
                color: #fff;
            }
        }
	}
</style>