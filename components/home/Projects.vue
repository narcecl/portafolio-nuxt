<template>
    <section class="section bg--secondary">
        <div class="container">
            <h2 class="heading--3 mb-8">Mis <mark>proyectos</mark></h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, ut. Illo vitae nisi necessitatibus consectetur amet nihil sed. Consequatur voluptatum sint tempore distinctio sequi quo ea, quae nemo perspiciatis deleniti!</p>

            <div class="mt-48">
                <div class="row total">
                    <div v-for="(project, i) in projects" :key="i" class="col-12 col-sm-4">
                        <div class="project">
                            <figure class="full project__image">
                                <img :src="project.image" :alt="project.name">
                            </figure>
                            <div class="project__info mt-16">
                                <div class="project__info__lang mb-20">
                                    <LangList :langs="project.langs" />
                                </div>

                                <h3 class="heading--6 fw--bold" v-text="project.name"></h3>
                                <p v-text="project.description"></p>

                                <div class="project__info__actions">
                                    <div class="btn--holder d-flex">
                                        <AppButton 
                                            v-for="(button, i) in project.links"
                                            :key="i" :href="button.url"
                                            :type="button.type"
                                            :text="button.text"
                                            :full="button.full"
                                            :icon="button.icon"
                                            :iconOrder="button.iconOrder"
                                        />
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
                    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae minima.',
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

            &__actions{
                margin-top: 24px;
                padding-top: 24px;
                border-top: 1px solid #eee;

                a{
                    + a{margin-left: 8px;}
                }
            }
        }
    }
</style>