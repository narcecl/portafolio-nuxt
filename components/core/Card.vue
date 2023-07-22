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
    border-radius: 8px;
    background: #fff;
    position: relative;
    border: 1px solid #eee;
}

.dark{
    .card{
        background: $dark-mode-bg;
		border-color: $dark-mode-bg;
    }
}
</style>