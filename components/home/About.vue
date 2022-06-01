<template>
    <section id="home-about" class="section">
        <div class="container">
            <div class="row total align-items-center">
                <div v-viewport data-animation="fadeInLeft" class="col-12 col-sm-7 inanimate">
                    <h2 class="heading--3 mb-8">Acerca de <mark>mi</mark></h2>
                    <p>
                        <mark>Desde el 2012</mark> llevo dedicando gran parte de mi tiempo al <mark>Desarrollo web y a Internet</mark>, amando cada cosa de lo que hago, aprendiendo día a día y mejorando constantemente.<br><br>
                        El <mark>desarrollo web</mark> comenzó como un hobby, pero rápidamente me di cuenta de que había descubierto una pasión y desde entonces no he parado de aprender.
                        <br><br>
                        Desde el 2018, en mis tiempos libres me dedico a la <mark>Fotografía</mark>, especialmente de retratos.
                        También me encantan los videojuegos (principalmente en PC y Nintendo Switch), ver series/anime y coleccionar mangas.
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
    name: 'HomeAbout'
}
</script>