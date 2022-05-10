<template>
    <section class="section bg--secondary">
        <div class="container">
            <div v-viewport data-animation="fadeInDown" class="section__heading inanimate mb-48">
                <h2 class="heading--3 mb-8">Mis <mark>proyectos</mark></h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, ut. Illo vitae nisi necessitatibus consectetur amet nihil sed. Consequatur voluptatum sint tempore distinctio sequi quo ea, quae nemo perspiciatis deleniti!</p>
            </div>

            <div v-viewport class="row total fade-child">
                <div v-for="(project, i) in projects" :key="i" class="col-12 col-sm-4 child">
                    <div class="project">
                        <figure class="full project__image">
                            <img :src="project.image" :alt="project.name">
                        </figure>
                        <div class="project__info mt-16">
                            <h3 class="heading--6 fw--bold mb-4" v-text="project.name"></h3>
                            <div class="project__info__lang mt-8 mb-24">
                                <LangList :langs="project.langs" />
                            </div>

                            <p class="project__info__desc f--small" v-text="project.description"></p>

                            <div class="project__info__actions">
                                <div class="btn--holder d-flex">
                                    <AppButton 
                                        v-for="(button, bi) in project.links"
                                        :key="bi" :href="button.url"
                                        :type="button.type"
                                        :text="button.text"
                                        :full="button.full"
                                        :icon="button.icon"
                                        :icon-order="button.iconOrder"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="click-to-action mt-48">
                <div class="d-flex align-items-center justify-content-between">
                    <div class="d-flex align-items-center">
                        <div class="click-to-action__icon d-flex align-items-center justify-content-center mr-8">
                            <span class="fas fa-mug-hot color--regular"></span>
                        </div>
                        <div class="click-to-action__content">
                            <h3 class="text-uppercase fw--bold">¿Te gusta o te ha servido mi trabajo?</h3>
                            <p class="f--small">Estoy regularmente desarrollando aplicaciones, snippets o componentes.</p>
                        </div>
                    </div>
                    <a href="https://ko-fi.com/narcecl" class="link--regular" target="_blank">Regalame un café</a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'HomeProjects',
    data: function(){
        return {
            projects: [
                {
                    name: 'Portafolio 2022',
                    description: 'Desarrollo de portafolio personal en NuxtJS.',
                    image: 'https://via.placeholder.com/350x200',
                    langs: ['Nuxt', 'Vue', 'HTML5', 'CSS3'],
                    links: [{type: 'github', text: 'Ver en Github', url: '#', full: true, icon: 'fa-code'}]
                },
                {
                    name: 'Grids Planner',
                    description: 'Una aplicación para poder organizar visualmente el feed de Instagram.',
                    image: 'https://via.placeholder.com/350x200',
                    langs: ['Vue', 'HTML5', 'CSS3'],
                    links: [{type: 'github', text: '', url: '#', icon: 'fa-code'}, {type: 'primary', text: 'Ir al proyecto', url: '#', full: true, icon: 'fa-arrow-up-right-from-square', iconOrder: 2}]
                },
                {
                    name: 'Vue Accesibilidad',
                    description: 'Un componente para aplicar accesibilidad visual en la web.',
                    image: 'https://via.placeholder.com/350x200',
                    langs: ['Vue', 'HTML5', 'CSS3'],
                    links: [{type: 'github', text: 'Ver en Github', url: '#', full: true, icon: 'fa-code'}]
                }
            ]
        };
    }
}
</script>

<style lang="scss" scoped>
    .project{
        padding: 12px;
        border-radius: 8px;
        background: #fff;

        &__image{
            border-radius: 8px;
            overflow: hidden;
        }

        &__info{
            padding: 0 8px;

            &__desc{
                min-height: 42px;
            }

            &__actions{
                margin-top: 32px;

                a{
                    + a{margin-left: 8px;}
                }
            }
        }
    }

    .click-to-action{
        padding: 20px 24px;
        background: rgba($primary-color, .1);
        // border: 2px solid rgba($primary-color, .2);
        border-radius: 8px;
        
        &__icon{
            width: 42px;
            height: 42px;
            display: block;
            padding: 8px;
            margin-right: 12px;
            border-radius: 100%;
            background: rgba($primary-color, .7);

            span{font-size: 20px;color:#fff;}
        }
    }
</style>