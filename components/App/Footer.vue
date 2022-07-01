<template>
    <footer>
        <div class="container">
            <div class="row total align-items-center">
                <div class="col-12 col-sm-6">
                    <p class="f--small d-flex justify-content-center justify-content-lg-start align-items-center">
                        <span class="fa fa-heart mr-12 animated animate__heartBeat animated__infinite" aria-hidden="true"></span>
                        Desarrollado con amor por <mark class="d-block ml-4">Nicolás Arce</mark>.
                    </p>
                </div>
                <div class="col-12 col-sm-6">
                    <div class="d-flex align-items-center justify-content-center justify-content-lg-end">
                        <AppDarkMode class="mr-32" />
                        <AppSocial class="w-100 w-sm-auto" size="sm" />
                    </div>
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
    padding: 32px 0 48px;

    @media screen and (min-width: $break-md){
        padding: 32px 0;
    }

    .fa-heart{
        color: #e14b1d;
    }
}
</style>