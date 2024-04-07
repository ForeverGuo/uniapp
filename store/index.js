import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	// 这里放全局参数
	state: {
		id: 1
	},
	mutations: {
		/** example */
		setId(state, id) {
			state.id = id;
		},
	}
})
