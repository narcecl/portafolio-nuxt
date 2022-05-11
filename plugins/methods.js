export default {
    smoothScroll: function(element){
		if( element ){
			const offsetElement = this.getOffset(element).top;

			window.scrollTo({
				'behavior': 'smooth',
				'left': 0,
				'top': offsetElement
			});
		}
		else{
			console.error('smoothScroll: elemento no encontrado.');
		}
	},

	scrollTo: function(elementName){
		if( elementName === '#' ) return false;
		const element = document.querySelector(elementName) || document.getElementById(elementName);

		if( element ){
			this.smoothScroll(element);
		}
		else{
			console.error('scrollTo: elemento no encontrado.');
		}
	},

    getOffset: function( element ){
		const offset = {top: 0, left: 0};

		while( element ){
			offset.top += element.offsetTop;
			offset.left += element.offsetLeft;

			element = element.offsetParent;
		}

		return offset;
	},
}