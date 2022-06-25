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
	}
}