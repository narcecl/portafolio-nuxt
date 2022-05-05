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
                    return 'vue';
                case 'Nuxt':
                case 'NuxtJS':
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
        background: #eee;

        &:last-of-type{margin-right:0;}

        &.vue{
            background: #42b883;
            border-color: #42b883;
            color: #fff;
        }

        &.nuxt{
            background: #00dc82;
            border-color: #00dc82;
        }
    }
}
</style>