<template>
    <ul class="socials">
        <li v-for="(item, index) in socials" :key="index">
            <a :href="item.href">
                <span :class="item.icon"></span>
            </a>
        </li>
    </ul>
</template>

<script>
export default{
    name: 'AppSocial',
    data: () => {
		return {
			socials: [
				{name: 'Email', href: 'mailto:hola@narce.cl', icon: 'fa-solid fa-square-envelope'},
				{name: 'Facebook', href: 'https://www.facebook.com/narcecl/', icon: 'fa-brands fa-facebook-square'},
				{name: 'Twitter', href: 'https://twitter.com/narcecl', icon: 'fa-brands fa-twitter-square'},
				{name: 'LinkedIn', href: 'https://www.linkedin.com/in/narcecl/', icon: 'fa-brands fa-linkedin'},
				{name: 'GitHub', href: 'https://github.com/narcecl', icon: 'fa-brands fa-github-square'}
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
        @include transition;

        a{font-size:36px;color:#fff;}

        &:hover{opacity:.5}
        &:last-of-type{margin-right:0;}
    }
}
</style>