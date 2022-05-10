<template>
    <a class="btn" :class="[`btn--${type}`, classController]">
        <span v-if="icon" :class="`btn__icon fa-solid ${icon} order-${iconOrder} ${text ? 'hm' : ''}`" aria-hidden="true"></span>
        {{ text }}
    </a>
</template>

<script>
export default {
    name: 'AppButton',
    props: {
        type: {type: String, default: 'primary'},
        text: {type: String, default: ''},
        full: {type: Boolean, default: false},
        icon: {type: [String, Boolean], default: false},
        iconOrder: {type: [String, Number], default: 0}
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
    display: flex;
    padding: 12px 16px;
    border-radius: 8px;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 12px;
    align-items: center;
    justify-content: center;
    @include transition;

    &__icon{
        &.hm{
            &.order-0{margin-right: 8px;}
            &.order-2{margin-left: 8px;}
        }
    }

    &--full{width:100%;}

    &--github{
        background:#8C949F;
        color:#fff;

        &:hover{
            background: #6e7681;
        }
    }

    &--primary{
        background:#2481c2;
        color:#fff;

        &:hover{
            background: #1D68A9;
        }
    }
}
</style>