import { createSSRApp } from 'vue'
import App from './App.vue'

import * as Pinia from 'pinia';
import uView from 'vk-uview-ui'
	
export function createApp() {
	const app = createSSRApp(App);
	
	app
		.use(uView)
		.use(Pinia.createPinia())
		.mount('#app')
	return {
		app,
		Pinia,
	};
}