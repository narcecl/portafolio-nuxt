<template>
    <section class="hero-section">
        <div class="d-flex align-items-center justify-content-center h-100">
            <div class="container">
                <div class="content-container w-100 w-sm-80 text-center center">
                    <slot />
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.hero-section{
    padding: 120px 0;
    background-image: url(~static/images/main-bg.jpg);
    background-size: cover;
    position: relative;

    @media screen and (min-width: $break-md){
        height: 100vh;
        background-attachment: fixed;
    }

    > div{
        position: relative;
        z-index: 1;
    }

    &:after{
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,.7);
        position: absolute;
        left: 0;
        top: 0;
    }
}
</style>