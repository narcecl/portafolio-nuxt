<template>
    <AppHero>
        <div>
            <h1>{{ errorInfo.title }}</h1>
            <div class="w-100 w-sm-90 center">
                <p class="f--md">{{ errorInfo.message }}</p>

                <div class="btn--holder mt-32">
                    <NuxtLink to="/">
                        Volver al inicio
                    </NuxtLink>
                </div>
            </div>
        </div>
    </AppHero>
</template>
  
<script>
export default {
    name: 'ErrorLayout',
    props: {
        error: { type: Object, default: () => ({}) },
    },
    computed: {
        errorInfo: function(){
            const messages = {
                404: {
                    title: 'Página no encontrada',
                    message: 'No pude encontrar la página que solicitada o ya no existe.'
                },
                500: {
                    title: 'Problema con el servidor',
                    message: 'Hay un problema con el servidor, estoy intentando solucionarlo, por favor intenta ingresar nuevamente más tarde.'
                }
            };

            return messages[this.error.statusCode];
        }
    },
    created: function(){
        console.log( this.error );
    },
    methods: {
		ga: function(){
			this.$store.dispatch('googleAnalytics', {
				pageTitle: `${this.error.statusCode} - ${this.error.message}`,
				page_path: this.error.path
			});
		}
	}
}
</script>

<style lang="scss" scoped>
span{
    color: #fff;
    display: block;
    margin-bottom: 8px;
}

h1{
    font-size: 28px;
    line-height: 1.1em;
    max-width: 90%;
    margin: 0 auto;
    color: #fff;
    text-transform: uppercase;
}

p{
    color:rgba(255,255,255,.8);
    mark{color:#fff;}
}

a{
    color: #fff;
    text-decoration: underline;
}
</style>
  