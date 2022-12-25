<template>
    <ul class="socials d-flex align-items-center" :class="[`socials--${theme} socials--${size} socials--${iconType}`]">
        <li v-for="(item, index) in socials" :key="index" :class="{'child': fadeChild}">
            <a :href="item.href" :aria-label="`Sigueme en ${item.name}`" :title="`Sigueme en ${item.name}`" target="_blank" rel="noreferrer noopener">
                <font-awesome-icon :icon="['fab', `${item.icons[iconType]}`]" aria-hidden="true" />
            </a>
        </li>
    </ul>
</template>

<script>
export default{
    name: 'Social',
    props: {
        theme: {type: String, default: 'dark'},
        size: {type: String, default: 'md'},
        iconType: {type: String, default: 'rounded'},
        fadeChild: {type: Boolean, default: false}
    },
    data: function(){
		return {
			socials: [
				// {name: 'Email', href: 'mailto:hola@narce.cl', icons: {square: 'solid square-envelope', rounded: 'solid envelope'}},
                {name: 'Instagram', href: 'https://www.instagram.com/narcecl/', icons: {square: 'instagram-square', rounded: 'instagram'}},
				// {name: 'Facebook', href: 'https://www.facebook.com/narcecl/', icons: {square: 'facebook-square', rounded: 'facebook'}},
				{name: 'Twitter', href: 'https://twitter.com/narcecl', icons: {square: 'twitter-square', rounded: 'twitter'}},
				{name: 'LinkedIn', href: 'https://www.linkedin.com/in/narcecl/', icons: {square: 'linkedin', rounded: 'linkedin-in'}},
				{name: 'GitHub', href: 'https://github.com/narcecl', icons: {square: 'github-square', rounded: 'github'}},
			]
		};
	}
}
</script>

<style lang="scss" scoped>
.socials{
    justify-content: space-between;

    @media screen and (min-width: $break-md){
        width: auto;
        justify-content: center;
    }

    li{
        @media screen and (min-width: $break-md){
            margin-right: 32px;
        }

        a{
            display: block;
            @include transition;

            &:hover{opacity:.5}
        }
        &:last-of-type{margin-right:0;}
    }

    &--rounded{
        li{
            a{
                padding: 4px 12px;
                @media screen and (min-width: $break-md){
                    padding: 0;
                }
            }
        }
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