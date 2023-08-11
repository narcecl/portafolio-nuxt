<template>
    <div class="card">
        <slot />
    </div>
</template>

<script>
export default {
    name: 'Card',
}
</script>

<style lang="scss" scoped>
.card{
    padding: 16px;
    border-radius: 16px;
    background: #fff;
    position: relative;
    border: 1px solid #eee;
    box-shadow: 0 1.2px 1.2px #666d8014,0 5px 10px #666d8014;
}

.dark{
    .card{
        background: $dark-mode-bg;
		border-color: #292929;
        box-shadow: none;
    }
}
</style>