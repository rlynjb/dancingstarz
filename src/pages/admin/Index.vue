<template>
<q-page class="q-pa-lg">
  <q-card class="q-mb-lg">
  	<q-card-main>
			<q-uploader :url="url" :upload-factory="uploadFile" auto-expand />
		</q-card-main>
	</q-card>

  <q-list class="row">
  	<q-item class="col-6" v-for="(photo, index) in photos" :key="index">
  		<q-item-side>
  			<img :src="photo.url" />
  		</q-item-side>

  		<q-item-main>
  			<h6 class="block">{{ photo.filename }}</h6>	
  		</q-item-main>

  		<q-item-side>
				<q-btn @click="removePhoto(photo.filename)">Remove</q-btn>
  		</q-item-side>
  	</q-item>
  </q-list>
</q-page>
</template>

<script>
import { storage, firestore } from 'plugins/firebase'


export default {
  name: 'AdminIndex',

  data() {
  	return {
  		url: '',
  		storageRef: storage.ref().child('webpics/')
  	}
  },

  computed: {
  	photos() {
  		return this.$store.state.photos
  	}
  },

  methods: {
  	uploadFile (file, updateProgress) {
    	return new Promise((resolve, reject) => {
    		storage.ref().child('webpics/' + file.name).put(file).on('state_changed', (snapshot) => {
    			let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
    			resolve(file)
    		}, (err) => {
    			// catch err here
    		}, (success) => {
    			// complete
    			console.log('success', success)
    			// add filename to firestore
    			this.$store.dispatch('addPhotoName', file.name)
    			// call getPhotos again to refresh list
    		})
    	})
  	},

  	removePhoto(filename) {
  		/*
			storage.ref().child('webpics/' + filename).delete().then(() => {
			  // File deleted successfully
			}).catch(function(error) {
			  // Uh-oh, an error occurred!
			});
			*/
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
