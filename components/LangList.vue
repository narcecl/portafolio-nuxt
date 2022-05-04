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
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.lang-list{
    li{
        display: inline-block;
        font-size: 11px;
        border: 1px solid #eee;
        border-radius: 8px;
        padding: 2px 12px;
        margin-right: 8px;

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