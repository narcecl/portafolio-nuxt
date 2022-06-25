<template>
    <section class="section bg--secondary">
        <div class="container">
            <div v-viewport data-animation="fadeInDown" class="section__heading text-center mb-60">
                <h2 class="heading--2 mb-8">Mi <mark>experiencia</mark></h2>
                <div class="w-100 w-sm-80 center">
                    <p>
                        A lo largo de mi carrera profesional he trabajado en empresas de tecnología, agencias de publicidad y grandes compañías del rubro financiero, entre las últimas de ellas se encuentran <mark>Banco Santander</mark> y <mark>Falabella Financiero</mark>.
                        <br>
                        Desde <mark>abril del 2022</mark> me encuentro desempeñando el cargo de <mark>Desarrollador Front-end</mark> en <a href="https://es.modyo.com/" target="_blank" rel="noreferrer noopener" class="link--regular">Modyo</a>.
                        <br>
                        Puedes conocer toda mi experiencia laboral en mi perfil de <a href="https://www.linkedin.com/in/narcecl/" target="_blank" rel="noreferrer noopener" class="link--regular">LinkedIn</a>.
                    </p>
                </div>
            </div>

            <div class="text-center">
                <p v-viewport data-animation="fadeInDown" data-delay="300" class="mb-12">
                    Durante el último tiempo he estado trabajado y perfeccionandome con las siguientes tecnologías:
                </p>

                <div v-viewport class="logos-list row total mini align-items-center justify-content-center fade-child">
                    <div v-for="(item, i) in logos" :key="i" class="logos-list__item col-6 col-sm-3 col-md-2 child">
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
            logos: [
                { name: 'VueJS', img: '/images/logo-1.png'},
                { name: 'NuxtJS', img: '/images/logo-2.png'},
                { name: 'React', img: '/images/logo-3.png'},
                { name: 'Laravel', img: '/images/logo-4.png'},
                { name: 'Modyo', img: '/images/logo-6.png'},
                { name: 'WordPress', img: '/images/logo-5.png'}
            ]
        };
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

.dark{
    .logos-list{
        &__item{
            figure{
                img{filter: brightness(0) invert(1);}
            }
        }
    }
}
</style>