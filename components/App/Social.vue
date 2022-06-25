<template>
    <ul class="socials" :class="[`socials--${theme} socials--${size}`]">
        <li v-for="(item, index) in socials" :key="index" :class="{'child': fadeChild}">
            <a :href="item.href" :aria-label="`Sigueme en ${item.name}`" :title="`Sigueme en ${item.name}`" target="_blank" rel="noreferrer noopener">
                <span :class="item.icons[iconType]" aria-hidden="true"></span>
            </a>
        </li>
    </ul>
</template>

<script>
export default{
    name: 'AppSocial',
    props: {
        theme: {type: String, default: 'dark'},
        size: {type: String, default: 'md'},
        iconType: {type: String, default: 'rounded'},
        fadeChild: {type: Boolean, default: false}
    },
    data: function(){
		return {
			socials: [
				// {name: 'Email', href: 'mailto:hola@narce.cl', icons: {square: 'fa-solid fa-square-envelope', rounded: 'fa-solid fa-envelope'}},
                {name: 'Instagram', href: 'https://www.instagram.com/narcecl/', icons: {square: 'fa-brands fa-instagram-square', rounded: 'fa-brands fa-instagram'}},
				{name: 'Facebook', href: 'https://www.facebook.com/narcecl/', icons: {square: 'fa-brands fa-facebook-square', rounded: 'fa-brands fa-facebook'}},
				{name: 'Twitter', href: 'https://twitter.com/narcecl', icons: {square: 'fa-brands fa-twitter-square', rounded: 'fa-brands fa-twitter'}},
				{name: 'LinkedIn', href: 'https://www.linkedin.com/in/narcecl/', icons: {square: 'fa-brands fa-linkedin', rounded: 'fa-brands fa-linkedin-in'}},
				{name: 'GitHub', href: 'https://github.com/narcecl', icons: {square: 'fa-brands fa-github-square', rounded: 'fa-brands fa-github'}},
			]
		};
	}
}
</script>

<style lang="scss" scoped>
.socials{
    li{
        display: inline-block;
        margin-right: 32px;
        vertical-align: middle;
        a{
            @include transition;

            &:hover{opacity:.5}
        }
        &:last-of-type{margin-right:0;}
    }

    &--light{
        li a{color:#fff;}
    }

    &--dark{
        li a{color:#555;}
    }

    &--sm{
        li a{font-size:24px;}
    }

    &--md{
        li a{font-size:36px;}
    }
}

.dark{
    .socials{
        li{
            a{color: #fff !important}
        }
    }
}
</style>