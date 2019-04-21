import Vue from 'vue'
import Vuex from 'vuex'
import { storage, firestore } from '../plugins/firebase'
import { axios } from '../plugins/axios'

import example from './module-example'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

const Store = new Vuex.Store({
  state: {
  	photos: []
  },
  getters: {},

  mutations: {
  	updatePhotos(state, {id, filename}) {
  		state.photos.push({
  			id,
  			filename
  		})
  	},

  	updatePhotoUrl(state, {filename, url}) {
  		let photo = state.photos.find(v => v.filename === filename)
  		Vue.set(photo, 'url', url)
  	}
  },

  actions: {
  	async addPhotoName({commit, store}, filename) {
			// Add a new document in collection "photos"
			firestore.collection("photos").add({
			  filename: filename
			})
			.then((res) => {
		    console.log("Photo successfully written!", res)
		    // push to state.photos
		    commit('updatePhotos', {
		    	id: res.id,
		    	filename: filename
		    })
			})
			.catch((error) => {
			  console.error("Error writing document: ", error)
			})
  	},

  	async deletePhotoName({commit, store}, id) {
  		//
  	},

  	async uploadPhoto({commit, store}, file){
  		//
  	},

  	async getPhotoList({commit, store}) {
  		let list = await firestore.collection('photos').get().then(res => {
  			res.forEach(v => {
  				commit('updatePhotos', {
  					id: v.id,
  					filename: v.data().filename
  				})
  			})
  		})
  	},

		async getPhoto({commit, store}, filename) {
			let url  = await storage.ref().child('webpics/' + filename).getDownloadURL()
	  	commit('updatePhotoUrl', {filename, url})
		}
  }
})


export default Store
