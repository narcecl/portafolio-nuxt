export const state = () => ({
	loading: true
});

export const mutations = {
	setLoading(state, value) {
		state.loading = value;
	}
}