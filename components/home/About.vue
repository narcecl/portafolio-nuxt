<template>
    <section class="section" id="home-about">
        <div class="container">
            <div class="row total align-items-center">
                <div v-viewport data-animation="fadeInLeft" class="col-12 col-sm-7 inanimate">
                    <h2 class="heading--3 mb-8">Acerca de <mark>mi</mark></h2>
                    <p>
                        Mi nombre es <mark>Nicolás Arce</mark>, tengo 26 años y <mark>desde el 2012</mark> llevo dedicando gran parte de mi tiempo al <mark>Desarrollo web y a Internet</mark>, amando cada cosa de lo que hago, aprendiendo día a día y mejorando constantemente.<br><br>
                        El desarrollo web comenzó como un hobby, pero rápidamente me di cuenta que había descubierto una pasión.
                    </p>
                </div>
                <div v-viewport data-animation="fadeInRight" class="col-12 col-sm-5 inanimate">
                    <figure class="full rounded">
                        <img src="https://via.placeholder.com/500x350" alt="Imagen">
                    </figure>
                </div>
                <div v-viewport data-animation="fadeInLeft" class="col-12 col-sm-5 inanimate">
                    <figure class="full rounded">
                        <img src="https://via.placeholder.com/500x350" alt="Imagen">
                    </figure>
                </div>
                <div v-viewport data-animation="fadeInRight" class="col-12 col-sm-7 inanimate">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate pariatur vel, aperiam cumque qui minus amet necessitatibus quos ducimus vitae obcaecati ad eos, architecto molestias quaerat fugiat magnam voluptates libero?<br><br>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate pariatur vel, aperiam cumque qui minus amet necessitatibus quos ducimus vitae obcaecati ad eos, architecto molestias quaerat fugiat magnam voluptates libero?
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'HomeAbout'
}
</script>