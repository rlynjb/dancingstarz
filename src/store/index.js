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
  	pushPhotosToState(state, {id, url, filename}) {
  		state.photos.push({
        id,
  			url,
  			filename
  		})
  	},

    removePhotoFromState(state, filename) {
      let index = state.photos.findIndex(v => v.filename === filename)
      state.photos.splice(index, 1)
    }
  },

  actions: {
  	async createPhotoItem({commit, store}, arg) {
			// Add a new document in collection "photos"
			let res = await firestore.collection("photos").add(arg)
			return res
  	},

  	async deletePhotoItem({commit, store}, id) {
      let res = firestore.collection('photos').doc(id).delete()
      return res
  	},

  	async uploadPhoto({commit, store}, file){
  		//
  	},

    async deletePhoto({commit, store}, filename){
      let res = await storage.ref().child('webpics/' + filename).delete()
      return res
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
