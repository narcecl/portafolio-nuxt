<template>
    <div class="dark-mode-toggle">  
        <input id="switch" v-model="value" :checked="value" type="checkbox" class="switch" @change="toggleDarkMode"/>
        <label for="switch" class="label">
            <i class="fas fa-moon" aria-hidden="true"></i>
            <i class="fas fa-sun" aria-hidden="true"></i>
            <div class="ball" title="Alternar modo oscuro"></div>
        </label>
    </div>
</template>

<script>
export default{
    name: 'DarkMode',
    data: function(){
        return {
            value: this.$store.state.darkMode
        };
    },
    created: function(){
        console.log('value =>', this.value );
        console.log('store =>', this.$store.state.darkMode );
    },
    methods: {
        toggleDarkMode: function(){
            // Componente darkmode
		    this.$store.commit('setDark', this.value);
        }
    },
}
</script>

<style lang="scss" scoped>
.dark-mode-toggle{
    .switch {
        opacity: 0;
        position: absolute;

        &:checked {
            + label{
                background: #555;
            }
            + .label .ball{
                transform: translateX(29px);
            }
        }
    }

    .label {
        background: #ddd;
        display: flex;
        align-items: center;
        justify-content: space-around;
        padding: 3px;
        border-radius: 50px;
        position: relative;
        width: 55px;
        height: 26px;
        transition: all .3s ease;
    }

    .label.dark {
        background: #111;
    }

    .ball {
        background-color: #fff;
        border-radius: 50%;
        position: absolute;
        top: 2px;
        left: 2px;
        width: 22px;
        height: 22px;
        transition: transform 0.3s linear;
        cursor: pointer;
    }

    .fa-moon {
        color: #fff;
    }

    .fa-sun {
        color: #555;
    }
}
</style>