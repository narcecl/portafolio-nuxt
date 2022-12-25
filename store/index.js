export const state = () => ({
	loading: true,
	darkMode: false
});

export const getters = {
	darkMode: (state) => state.darkMode
};

export const mutations = {
	setLoading: function(state, value) {
		state.loading = value;
	},
	setDark: function(state, value){
		state.darkMode = value;
	},
}

export const actions = {
	googleAnalytics: function(state, {pageTitle, pageLocation}){
		/* eslint-disable */
		if( typeof gtag !== 'undefined' ){
			gtag('event', 'page_view', {
				page_title: pageTitle,
				page_path: pageLocation,
			});
		}
	}
}