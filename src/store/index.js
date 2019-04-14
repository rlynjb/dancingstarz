import Vue from 'vue'
import Vuex from 'vuex'

import example from './module-example'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      example
    },
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
	  mutations: {},
	  actions: {}
  })

  return Store
}
