<template>
    <section class="hero-section">
        <div class="d-flex align-items-center justify-content-center h-100">
            <div class="container">
                <div class="content-container w-100 w-sm-80 text-center center">
                    <figure v-viewport data-animation="fadeInDown" data-delay="300" class="hidden-caption mb-60">
                        <nuxt-img src="/images/narce.svg" alt="Logo Nicolás Arce" width="260" height="34" loading="lazy" />
                        <figcaption>Isologo Nicolás Arce</figcaption>
                    </figure>

                    <div v-viewport data-animation="fadeInDown" data-delay="600">
                        <h1>¿Tienes una <mark>idea</mark> en mente? <span>perfecto, yo me encargo del resto</span></h1>
                        <div class="mt-16 w-100 w-sm-90 center">
                            <p class="f--md">Mi nombre es <mark>Nicolás Arce</mark>, vivo en Santiago de Chile, soy <mark>Desarrollador Front-end</mark> y me especializo en el <mark>Desarrollo web a medida</mark>, siendo una persona autodidacta, espontánea y muy perfeccionista.</p>
                        </div>
                    </div>

                    <div class="sociales mt-40">
                        <p v-viewport data-animation="fadeInDown" data-delay="600" class="mb-20">Escríbeme a través de mis redes sociales para saber más de mi o simplemente saludarme :)</p>
                        <AppSocial v-viewport data-delay="900" class="w-80 w-sm-auto center fade-child" theme="light" icon-type="square" :fade-child="true" />
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

        <div class="custom-shape-divider-bottom-1666744919">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
            </svg>
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
            }, 5300);

            document.addEventListener('scroll', () => {
                clearTimeout(scrollTimer);
            });
        });
    }
}
</script>

<style lang="scss" scoped>
.hero-section{
    padding: 120px 0;
    background-image: url(~static/images/main-bg.jpg);
    background-size: cover;
    position: relative;

    @media screen and (min-width: $break-md){
        height: calc(100vh + 100px);
        background-attachment: fixed;
    }

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

    .content-container{
        @media screen and (min-width: $break-sm){
            margin-top: -100px;
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
    }

    .scroll-down{
        position: absolute;
        left: 0;
        right: 0;
        margin: auto;
        bottom: 120px;
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

    .custom-shape-divider-bottom-1666744919 {
        display: none;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        overflow: hidden;
        line-height: 0;
        transform: rotate(180deg);

        @media screen and (min-width: $break-sm){
            display: block;
        }

        svg {
            position: relative;
            display: block;
            width: calc(100% + 1.3px);
            height: 100px;

            .shape-fill {
                fill: #FFFFFF;
            }
        }
    }
}

.dark{
    .custom-shape-divider-bottom-1666744919{
        svg{
            .shape-fill{
                fill: #1a1a1a;
            }
        }
    }
}
</style>