import Vue from 'vue';
import methods from './methods.js';

Vue.directive('scrollto', {
	inserted: function(el, binding){
		if( binding.value ){
			el.addEventListener('click', function(event){
				event.preventDefault();
				if( binding.value === '#' ) return false;

				const target = document.querySelector(binding.value);
				if( target ) methods.smoothScroll(target);
			});
		}
	}
});