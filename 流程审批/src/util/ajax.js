'use strict'
import Vue from 'vue'
import vueResource from 'vue-resource'

Vue.use(vueResource)
export default {
	data() {

	},
	methods: {
		fetchData(url,params,callback) {
			this.$http.get(url,params).then((response) => {
				callback(response.body);
			}, (response) => {
				console.error(response);
			});
		},
		subForm(url,params,callback) {
			this.$http.post(url,params).then((response) => {
				callback(response.body);
			}, (response) => {
				console.error(response);
			});
		},
		patchData(url,params,callback) {
			this.$http.patch(url,params).then((response) => {
				callback(response.body);
			}, (response) => {
				console.error(response);
			});
		},
	}
}
