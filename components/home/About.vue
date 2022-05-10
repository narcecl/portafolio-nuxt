<template>
    <section v-viewport="callback" class="section">
        <div class="container">
            <div class="row total align-items-center">
                <div v-viewport data-animation="fadeInLeft" class="col-12 col-sm-7 inanimate">
                    <h2 class="heading--3 mb-8">Acerca de <mark>mi</mark></h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate pariatur vel, aperiam cumque qui minus amet necessitatibus quos ducimus vitae obcaecati ad eos, architecto molestias quaerat fugiat magnam voluptates libero?<br><br>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate pariatur vel, aperiam cumque qui minus amet necessitatibus quos ducimus vitae obcaecati ad eos, architecto molestias quaerat fugiat magnam voluptates libero?
                    </p>
                </div>
                <div v-viewport data-animation="fadeInRight" class="col-12 col-sm-5 inanimate">
                    <figure class="full rounded">
                        <img src="https://via.placeholder.com/500x350" alt="Imagen">
                    </figure>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'HomeAbout',
    methods: {
        callback: () => {
            console.log('wawa');
        }
    }
}
</script>