<template>
    <section class="section">
        <div class="container">
            <div v-viewport data-animation="fadeInDown" class="section__heading inanimate mb-48">
                <h2 class="heading--3 mb-8">Mis <mark>proyectos</mark></h2>
                <p>
                    Parte de mi tiempo libre lo dedico a desarrollar aplicaciones y componentes para la web. Aquí podrás ver en los que estoy trabajando ahora.
                    <br>
                    Puedes ver todos mis desarrollos en mi perfil de <a href="https://github.com/narcecl" target="_blank" rel="noreferrer noopener" class="link--regular">GitHub</a>.
                </p>
            </div>

            <div v-viewport class="row total fade-child">
                <div v-for="(project, i) in projects" :key="i" class="col-12 col-sm-4 child">
                    <div class="project">
                        <figure class="full project__image">
                            <img :src="project.image" :alt="project.name">
                        </figure>
                        <div class="project__info mt-12">
                            <div class="project__info__lang mb-24">
                                <LangList :langs="project.langs" />
                            </div>
                            <h3 class="heading--6 fw--bold mb-4" v-text="project.name"></h3>
                            <p class="project__info__desc f--small" v-text="project.description"></p>

                            <div class="project__info__actions">
                                <div class="btn--holder d-flex">
                                    <AppButton 
                                        v-for="(button, bi) in project.links"
                                        target="_blank"
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

            <AppClickToAction
                class="mt-60"
                title="¿Te gusta o te ha servido mi trabajo?"
                description="Estoy constantemente desarrollando aplicaciones, snippets o componentes (generalmente en Vue)."
                icon="fa-mug-hot"
            >
                <a href="https://ko-fi.com/narcecl" class="link--regular fw--bold f-14" rel="noreferrer noopener" target="_blank">
                    Regalame un café
                    <i class="fa-solid fa-chevron-right ml-8" aria-hidden="true"></i>
                </a>
            </AppClickToAction>
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
                    langs: ['NUXT JS', 'VUE', 'HTML5', 'CSS3'],
                    links: [{type: 'github', text: 'Ver en Github', url: 'https://github.com/narcecl/portafolio-nuxt', full: true, icon: 'fa-code'}]
                },
                {
                    name: 'Grids Planner',
                    description: 'Una aplicación para poder organizar visualmente el feed de Instagram.',
                    image: 'https://via.placeholder.com/350x200',
                    langs: ['VUE', 'HTML5', 'CSS3'],
                    links: [{type: 'github', text: '', url: 'https://github.com/narcecl/grids-planner', icon: 'fa-code'}, {type: 'primary', text: 'Ir al proyecto', url: '#', full: true, icon: 'fa-arrow-up-right-from-square', iconOrder: 2}]
                },
                {
                    name: 'Vue Accesibilidad',
                    description: 'Un componente para aplicar accesibilidad visual en la web.',
                    image: 'https://via.placeholder.com/350x200',
                    langs: ['VUE', 'HTML5', 'CSS3'],
                    links: [{type: 'github', text: 'Ver en Github', url: 'https://github.com/narcecl/vue-accesibilidad', full: true, icon: 'fa-code'}]
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
    border: 1px solid #eee;

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
</style>