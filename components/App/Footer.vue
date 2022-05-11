<template>
    <footer>
        <div class="container">
            <div class="row total align-items-center">
                <div class="col-12 col-sm-6">
                    <p class="f--small d-flex align-items-center">
                        <span class="fa fa-heart mr-12 animated animate__heartBeat animated__infinite" aria-hidden="true"></span>
                        Desarrollado con amor por <mark class="d-block ml-4">Nicolás Arce</mark>.
                    </p>
                </div>
                <div class="col-12 col-sm-6 text-right">
                    <AppSocial size="sm" />
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'AppFooter'
}
</script>

<style lang="scss" scoped>
footer{
    padding: 32px 0;

    .fa-heart{
        color: #e14b1d;
    }
}
</style>