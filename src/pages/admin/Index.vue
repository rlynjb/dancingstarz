<template>
<q-page class="q-pa-lg">
  <q-card class="q-mb-lg">
  	<q-card-main>
			<q-uploader :url="url" :upload-factory="uploadFile" />
		</q-card-main>
	</q-card>

  <q-list class="">
  	<q-item v-for="(photo, index) in photos" :key="index">
  		<q-item-side>
  			<img :src="photo.url" />
  		</q-item-side>

  		<q-item-main>
  			<h6 class="block">{{ photo.filename }}</h6>	
  		</q-item-main>

  		<q-item-side>
				<q-btn @click="removePhoto">Remove</q-btn>
  		</q-item-side>
  	</q-item>
  </q-list>
</q-page>
</template>

<script>
import { storage, firestore } from '../plugins/firebase'

export default {
  name: 'AdminIndex',

  data() {
  	return {
  		url: '',
  	}
  },

  computed: {
  	photos() {
  		return this.$store.state.photos
  	}
  },

  methods: {
  	uploadFile (file, updateProgress) {
  		console.log(file)
  	},

  	removePhoto() {
  		//
  	},
  }
}
</script>

<style lang="styl">
@import '~variables'
.q-item
	img
		max-width: 10em

</style>
