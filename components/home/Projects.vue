<template>
    <section class="section bg--secondary">
        <div class="container">
            <h2 class="heading--2 mb-16">Mis <mark>proyectos</mark></h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, ut. Illo vitae nisi necessitatibus consectetur amet nihil sed. Consequatur voluptatum sint tempore distinctio sequi quo ea, quae nemo perspiciatis deleniti!</p>

            <div class="mt-48">
                <div class="row total">
                    <div v-for="(project, i) in projects" :key="i" class="col-12 col-sm-4">
                        <div class="project">
                            <figure class="full project__image">
                                <img :src="project.image" :alt="project.name">
                            </figure>
                            <div class="project__info mt-16">
                                <h3 class="text--uppercase fw--bold" v-text="project.name"></h3>
                                <p v-text="project.description"></p>

                                <div class="project__info__lang mt-16">
                                    <LangList :langs="project.langs" />
                                </div>

                                <div class="project__info__actions mt-20">
                                    <div class="btn--holder d-flex">
                                        <AppButton v-for="(button, i) in project.links" :key="i" :href="button.url" :type="button.type" :text="button.text" :full="button.full" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
                    description: 'Desarrollo de mi portafolio personal en NuxtJS.',
                    image: 'https://via.placeholder.com/350x200',
                    langs: ['Nuxt', 'Vue', 'HTML5', 'CSS3'],
                    links: [{type: 'github', text: 'Github', url: '#', full: true}]
                },
                {
                    name: 'Grids Planner',
                    description: 'Una aplicación para poder organizar visualmente el feed de Instagram.',
                    image: 'https://via.placeholder.com/350x200',
                    langs: ['Vue', 'HTML5', 'CSS3'],
                    links: [{type: 'github', text: 'Github', url: '#'}, {type: 'primary', text: 'Ir al proyecto', url: '#', full: true}]
                },
                {
                    name: 'Vue Accesibilidad',
                    description: 'Un componente para aplicar accesibilidad visual en la web.',
                    image: 'https://via.placeholder.com/350x200',
                    langs: ['Vue', 'HTML5', 'CSS3'],
                    links: [{type: 'github', text: 'Github', url: '#', full: true}]
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

            &__actions{
                padding-top: 20px;
                border-top: 1px solid #eee;

                a{
                    + a{margin-left: 8px;}
                }
            }
        }
    }
</style>