<template>
    <div class="click-to-action">
        <div class="d-flex align-items-center justify-content-between">
            <div class="d-flex align-items-center w-100 w-sm-80">
                <div class="click-to-action__icon d-flex align-items-center justify-content-center">
                    <span class="fa-solid color--regular" :class="icon" aria-hidden="true"></span>
                </div>
                <div class="click-to-action__content">
                    <h3 v-if="title" v-text="title" class="text-uppercase fw--bold"></h3>
                    <p v-if="description" v-text="description" class="f--small"></p>
                </div>
            </div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ClickToAction',
    props: {
        title: {type: [String, Boolean], default: false},
        description: {type: [String, Boolean], default: false},
        icon: {type: [String, Boolean], default: false}
    },
    data: function(){
        return {

        };
    }
}
</script>

<style lang="scss" scoped>
.click-to-action{
    padding: 20px 24px;
    background: rgba($primary-color, .1);
    // border: 2px solid rgba($primary-color, .2);
    border-radius: 8px;
    
    &__icon{
        width: 42px;
        height: 42px;
        display: block;
        padding: 8px;
        margin-right: 16px;
        border-radius: 100%;
        background: rgba($primary-color, .7);

        span{font-size: 20px;color:#fff;}
    }
}
</style>