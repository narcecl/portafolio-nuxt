export const state = () => ({
	loading: true,
	darkMode: false
});

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
		if( gtag ){
			gtag('event', 'page_view', {
				page_title: pageTitle,
				page_path: pageLocation,
			});
		}
	}
}