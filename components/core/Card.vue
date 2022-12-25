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
    padding: 32px 24px;
    border-radius: 8px;
    background: #fff;
    box-shadow: 0 0 8px rgba(0,0,0,.05);
    border: 1px solid #eee;
    position: relative;
}

.dark{
    .card{
        background: $dark-mode-bg;
		border-color: $dark-mode-bg;
    }
}
</style>