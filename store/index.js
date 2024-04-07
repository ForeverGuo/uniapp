import { defineStore } from 'pinia';

export const userStore= defineStore('common', {
	state: () => {
		return {
			userInfo: {
				name: 'xxx'
			},
		}
	},
	getters: {
		getUserInfo: (state) => state.userInfo
	},
	actions: {
		
	},
})