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
  	pushPhotos(state, {id, url, filename}) {
  		state.photos.push({
        id,
  			url,
  			filename
  		})
  	},
  },

  actions: {
  	async createPhotoItem({commit, store}, arg) {
			// Add a new document in collection "photos"
			let res = await firestore.collection("photos").add(arg)
			return res
  	},

  	async deletePhotoItem({commit, store}, id) {
  		//
  	},

  	async uploadPhoto({commit, store}, file){
  		//
  	},

    async deletePhoto({commit, store}, file){
      /*
      storage.ref().child('webpics/' + filename).delete().then(() => {
        // File deleted successfully
      }).catch(function(error) {
        // Uh-oh, an error occurred!
      });
      */
    },

  	async getPhotoList({commit, store}) {
  		let list = await firestore.collection('photos').get()
      return list
  	},

		async getPhotoUrl({commit, store}, filename) {
			let url  = await storage.ref().child('webpics/' + filename).getDownloadURL()
	  	return url
		}
  }
})


export default Store
