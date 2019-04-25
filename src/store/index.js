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
  	photos: [],
    banners: []
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
    },

    // Banners
    pushBannersToState(state, {id, url, filename, header, desc}) {
      state.banners.push({
        id,
        url,
        filename,
        header,
        desc
      })
    },
    removeBannerFromState(state, filename) {
      let index = state.banners.findIndex(v => v.filename === filename)
      state.banners.splice(index, 1)
    },
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
  	async getPhotoList({commit, store}) {
  		let list = await firestore.collection('photos').get()
      return list
  	},

		async getPhotoUrl({commit, store}, filename) {
			let url  = await storage.ref().child('webpics/' + filename).getDownloadURL()
	  	return url
		},
    async uploadPhoto({commit, store}, file){
      //
    },
    async deletePhoto({commit, store}, filename){
      let res = await storage.ref().child('webpics/' + filename).delete()
      return res
    },

    // Banners endpoint
    async createBannerItem({commit, store}, arg) {
      let res = await firestore.collection("banners").add(arg)
      return res
    },
    async deleteBannerItem({commit, store}, id) {
      let res = await firestore.collection('banners').doc(id).delete()
      return res
    },
    async getBannerList({commit, store}) {
      let res = await firestore.collection('banners').get()
      return res
    },

    async getBannerUrl({commit, store}, filename) {
      let res = await storage.ref().child('banners/' + filename).getDownloadURL()
      return res
    },
    async uploadBanner({commit, store}, file) {
      //
    },
    async deleteBanner({commit, store}, filename) {
      let res = await storage.ref().child('banners/' + filename).delete()
      return res
    }
  }
})


export default Store
