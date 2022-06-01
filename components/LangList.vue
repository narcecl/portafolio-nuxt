<template>
    <ul v-if="langs.length" class="lang-list">
        <li v-for="(lang, i) in langs" :key="i" :class="getTheme(lang)" v-text="lang"></li>
    </ul>
</template>

<script>
export default {
    name: 'LangList',
    props: {
        langs: {type: Array, default: () => []}
    },
    methods: {
        getTheme: function(lang){
            switch(lang){
                case 'Vue':
                case 'VUE':
                    return 'vue';
                case 'Nuxt':
                case 'NuxtJS':
                case 'NUXT JS':
                    return 'nuxt';
                case 'HTML5':
                    return 'html';
                case 'CSS3':
                    return 'css';
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.lang-list{
    li{
        display: inline-block;
        font-size: 10px;
        border-radius: 8px;
        padding: 2px 8px;
        margin-right: 6px;
        border: 1px solid #eee;
        letter-spacing: .2px;
        font-weight: 600;

        &:last-of-type{margin-right:0;}

        &.vue{
            background: rgba(#42b883, .15);
            border-color: rgba(#42b883, .2);
        }

        &.nuxt{
            background: rgba(#00dc82, .15);
            border-color: rgba(#00dc82, .2);
        }

        &.html{
            background: rgba(#e25123, .2);
            border-color: rgba(#e25123, .1);
        }

        &.css{
            background: rgba(#0c73b8, .2);
            border-color: rgba(#0c73b8, .1);
        }
    }
}
</style>