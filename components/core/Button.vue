<template>
    <a class="btn" :class="[`btn--${type}`, classController]" :aria-label="text ? text : 'Button'">
        <font-awesome-icon v-if="icon" :class="`btn__icon order-${iconOrder} ${text ? 'hm' : ''}`" :icon="['fas', icon]" aria-hidden="true" />
        {{ text }}
    </a>
</template>

<script>
export default {
    name: 'Button', // eslint-disable-line
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
    padding: 16px;
    border-radius: 8px;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 14px;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    @include transition;

    &__icon{
        &.hm{
            &.order-0{margin-right: 12px;}
            &.order-2{margin-left: 12px;}
        }
    }

    &--full{width:100%;}

    &--github{
        background:#5C646F;
        color:#fff;

        &:hover{
            background: #6e7681;
        }
    }

    &--primary{
        background: $primary-color;
        color:#fff;

        &:hover{
            background: #1D68A9;
        }
    }
}
</style>