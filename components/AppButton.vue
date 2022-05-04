<template>
    <a class="btn" :class="[`btn--${type}`, classController]">{{ text }}</a>
</template>

<script>
export default {
    name: 'AppButton',
    props: {
        type: {type: String, default: 'primary'},
        text: {type: String, default: 'button'},
        full: {type: Boolean, default: false}
    },
    computed: {
        classController: function(){
            return {
                'btn--full': this.full
            };
        }
    }
}
</script>

<style lang="scss" scoped>
.btn{
    display: inline-block;
    padding: 12px 16px;
    border-radius: 8px;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 12px;

    &--full{width:100%;display:block;}

    &--github{background:#6e7681;color:#fff;}
    &--primary{background:#2481c2;color:#fff;}
}
</style>