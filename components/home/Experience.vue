<template>
    <section class="section bg--secondary">
        <div class="container">
            <div v-viewport data-animation="fadeInDown" class="section__heading inanimate mb-48">
                <h2 class="heading--3 mb-8">Mi <mark>experiencia</mark></h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, ut. Illo vitae nisi necessitatibus consectetur amet nihil sed. Consequatur voluptatum sint tempore distinctio sequi quo ea, quae nemo perspiciatis deleniti!</p>
            </div>

            <div  v-viewport class="row total mini fade-child">
                <div v-for="(item, i) in logos" :key="i" class="col-12 col-sm-2 child">
                    <figure class="full">
                        <img :src="item" alt="Logo">
                    </figure>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'HomeExperience',
    data: function(){
        return {
            logos: [
                'https://via.placeholder.com/200x70',
                'https://via.placeholder.com/200x70',
                'https://via.placeholder.com/200x70',
                'https://via.placeholder.com/200x70',
                'https://via.placeholder.com/200x70',
                'https://via.placeholder.com/200x70'
            ]
        };
    }
}
</script>