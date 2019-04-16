import Vue from 'vue'
import Vuex from 'vuex'
import { storage } from '../plugins/firebase'
import { axios } from '../plugins/axios'

import example from './module-example'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

const Store = new Vuex.Store({
  state: {
  	photoPath: 'statics/photos/',
  	photos: [
  		{
  			filename: 'img1.jpg'
  		},
  		{
  			filename: 'img2.jpg'
  		},
  		{
  			filename: 'img3.jpg'
  		}
  	]
  },
  getters: {},

  mutations: {
  	updatePhotoUrl(state, {filename, url}) {
  		let photo = state.photos.find(v => v.filename === filename)
  		Vue.set(photo, 'url', url)
  	}
  },

  actions: {
		async getPhoto({commit, store}, filename) {
			let url  = await storage.ref().child('webpics/' + filename).getDownloadURL()
	  	commit('updatePhotoUrl', {filename, url})
		}
  }
})


export default Store
