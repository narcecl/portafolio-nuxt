<template>
    <ul class="list">
        <slot />
    </ul>
</template>

<script>
export default {
    name: 'List',
}
</script>

<style lang="scss" scoped>
.list{
    li{
        padding-left: 20px;
        position: relative;

        + li{
            margin-top: 8px;
        }

        &:before{
            content: "";
            width: 8px;
            height: 8px;
            background: $primary-color;
            border-radius: 100%;
            display: block;
            position: absolute;
            left: 0;
            top: 8px;
        }
    }
}
</style>