<template>
	<transition name="fade">
		<div v-if="loading" class="loading">
			<div class="d-flex align-items-center justify-content-center h-100">
				<div class="sk-cube-grid"><div class="sk-cube sk-cube1"></div><div class="sk-cube sk-cube2"></div><div class="sk-cube sk-cube3"></div><div class="sk-cube sk-cube4"></div><div class="sk-cube sk-cube5"></div><div class="sk-cube sk-cube6"></div><div class="sk-cube sk-cube7"></div><div class="sk-cube sk-cube8"></div><div class="sk-cube sk-cube9"></div></div>
			</div>
		</div>
	</transition>
</template>

<script>
export default {
	name: 'Loader',
	data: () => {
		return {
			loading: true
		};
	},
	methods: {
    	start: function(){
			this.loading = true;
			this.$store.commit('setLoading', true);
		},
		finish: function(){
			this.loading = false;
			this.$store.commit('setLoading', false);
		}
	}
}
</script>

<style lang="scss" scoped>
	.loading{
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		z-index: 99999;
		background:#fff;
		
		.sk-cube-grid{
			width: 70px;
			height: 70px;
			margin: 0 auto;

			.sk-cube{
				width:33%;
				height:33%;
				background-color:#2481C2;
				float:left;
				-webkit-animation:sk-cubeGridScaleDelay 1.3s infinite ease-in-out;
				animation:sk-cubeGridScaleDelay 1.3s infinite ease-in-out;

				&1{-webkit-animation-delay:.2s;animation-delay:.2s}
				&2{-webkit-animation-delay:.3s;animation-delay:.3s}
				&3{-webkit-animation-delay:.4s;animation-delay:.4s}
				&4{-webkit-animation-delay:.1s;animation-delay:.1s}
				&5{-webkit-animation-delay:.2s;animation-delay:.2s}
				&6{-webkit-animation-delay:.3s;animation-delay:.3s}
				&7{-webkit-animation-delay:0;animation-delay:0}
				&8{-webkit-animation-delay:.1s;animation-delay:.1s}
				&9{-webkit-animation-delay:.2s;animation-delay:.2s}
			}
		}
	}

	@-webkit-keyframes sk-cubeGridScaleDelay {
		0%,70%,100%{-webkit-transform:scale3D(1,1,1);transform:scale3D(1,1,1)}
		35%{-webkit-transform:scale3D(0,0,1);transform:scale3D(0,0,1)}
	}
	@keyframes sk-cubeGridScaleDelay {
		0%,70%,100%{-webkit-transform:scale3D(1,1,1);transform:scale3D(1,1,1)}
		35%{-webkit-transform:scale3D(0,0,1);transform:scale3D(0,0,1)}
	}
</style>
