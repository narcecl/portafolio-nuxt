<template>
    <section class="section bg--secondary">
        <div class="container">
            <div v-viewport data-animation="fadeInDown" class="section__heading inanimate text-center mb-48">
                <h2 class="heading--3 mb-8">Mi <mark>experiencia</mark></h2>
                <div class="w-100 w-sm-80 center">
                    <p>
                        A lo largo de mi carrera profesional, he trabajado en algunas agencias y grandes empresas del rubro financiero, entre algunas de ellas se encuentran <mark>Banco Santander</mark> y <mark>Banco Falabella</mark>.
                        <br><br>
                        Actualmente me encuentro desempeñando el cargo de <mark>Desarrollador Front-end</mark> en <mark>Modyo</mark>.
                    </p>
                </div>
            </div>

            <div class="text-center">
                <p class="mb-12">Durante el último tiempo he estado trabajado con las siguientes tecnologías:</p>

                <div v-viewport class="logos-list row total mini align-items-center justify-content-center fade-child">
                    <div v-for="(item, i) in logos" :key="i" class="logos-list__item col-12 col-sm-2 child">
                        <figure class="full">
                            <img :src="item" alt="Logo">
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
                '/images/logo-1.png',
                '/images/logo-2.png',
                '/images/logo-3.png',
                '/images/logo-4.png',
                '/images/logo-6.png',
                '/images/logo-5.png'
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

            img{filter: grayscale(100%);@include transition;}

            &:hover{
                img{filter: none;}
            }
        }
    }
}
</style>