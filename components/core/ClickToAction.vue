<template>
    <div class="click-to-action">
        <div class="d-sm-flex align-items-center justify-content-between">
            <div class="d-sm-flex align-items-center w-100 w-sm-80">
                <div class="click-to-action__icon d-flex align-items-center justify-content-center">
                    <font-awesome-icon :icon="['fas', icon]" aria-hidden="true" />
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
    }
}
</script>

<style lang="scss" scoped>
.click-to-action{
    padding: 24px;
    background: rgba($primary-color, .15);
    border-radius: 16px;
    box-shadow: 0 1.2px 1.2px #666d8014,0 5px 10px #666d8014;

    @media screen and (min-width: $break-md){
        padding: 20px 24px;
    }

    &__content{
        margin: 20px 0 32px;

        h3{
            line-height: 1.6rem;
            margin-bottom: 8px;

            @media screen and (min-width: $break-md){
                line-height: 1.2rem;
                margin-bottom: 0;
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

        svg{
            font-size: 20px;
            fill: #fff;
            path{ fill: inherit; }
        }
    }
}

.dark{
    .click-to-action{
        box-shadow: none;
        &__slot{
            *{color: #fff !important;}
        }
    }
}
</style>