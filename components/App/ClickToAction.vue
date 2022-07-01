<template>
    <div class="click-to-action">
        <div class="d-sm-flex align-items-center justify-content-between">
            <div class="d-sm-flex align-items-center w-100 w-sm-80">
                <div class="click-to-action__icon d-flex align-items-center justify-content-center">
                    <span :class="icon" class="fa-solid color--regular" aria-hidden="true"></span>
                </div>
                <div class="click-to-action__content">
                    <h3 v-if="title" class="text-uppercase fw--bold" v-text="title"></h3>
                    <p v-if="description" class="f--small" v-text="description"></p>
                </div>
            </div>
            <div class="click-to-action__slot">
                <slot></slot>
            </div>
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
    padding: 20px 16px;
    background: rgba($primary-color, .15);
    border-radius: 8px;

    @media screen and (min-width: $break-md){
        padding: 20px 24px;
    }

    &__content{
        margin: 20px 0 32px;

        h3{
            line-height: 1.6rem;
            margin-bottom: 12px;

            @media screen and (min-width: $break-md){
                line-height:1.2rem;
                margin-bottom:0;
            }
        }

        @media screen and (min-width: $break-sm){
            margin: 0;
        }
    }

    .link--regular{
        color: #555 !important;
    }
    
    &__icon{
        width: 42px;
        height: 42px;
        display: block;
        padding: 8px;
        margin-right: 16px;
        border-radius: 100%;
        background: rgba($primary-color, .7);

        span{
            font-size: 20px;
            color:#fff;
        }
    }
}

.dark{
    .click-to-action{
        &__slot{
            *{color: #fff !important;}
        }
    }
}
</style>