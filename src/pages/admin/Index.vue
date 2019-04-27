<template>
<q-page class="q-pa-lg">
  <h4 class="q-mt-none">Photos</h4>
  <q-card class="q-mb-lg">
  	<q-card-main>
			<q-uploader multiple :url="url" :upload-factory="uploadFile" auto-expand />
		</q-card-main>
	</q-card>

  <q-list class="row">
  	<q-item class="col-sm-12 col-md-6" v-for="(photo, index) in photos" :key="index">
  		<q-item-side>
  			<img :src="photo.url" />
  		</q-item-side>

  		<q-item-main>
  			<h6 class="block">{{ photo.filename }}</h6>	
  		</q-item-main>

  		<q-item-side>
				<q-btn @click="removePhoto(photo)">Remove</q-btn>
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
  		url: ''
  	}
  },

  computed: {
  	photos() {
  		return this.$store.state.photos
  	}
  },

  mounted() {
  	//console.log(this.$store.state.photos)
  },

  methods: {
  	uploadFile (file, updateProgress) {
    	return new Promise((resolve, reject) => {
    		storage.ref().child('webpics/' + file.name).put(file).on('state_changed', (snapshot) => {
    			let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
    			resolve(file)

    			// if upload is complete
    			if (snapshot.bytesTransferred === snapshot.totalBytes) {
	    			// add photo to firestore with id, filename, url
	    			// and push to store photos arr

            this.$q.notify({ message: 'Upload complete', type: 'positive' })

	    			// get photo url
    				this.$store.dispatch('getPhotoUrl', file.name).then(url => {
    					// create photo item in firestore
    					// and store filename and url
              this.$q.notify({ message: 'Retrieving photo url complete', type: 'positive' })

		    			this.$store.dispatch('createPhotoItem', {
		    				filename: file.name,
		    				url: url
		    			}).then(res => {
		    				// push to app photos arr
                this.$q.notify({ message: 'Photo reference created complete', type: 'positive' })

		    				this.$store.commit('pushPhotosToState', {
		    					filename: file.name,
		    					url: url
		    				})
		    			})

    				})

    			}


    		})
    	})
  	},

  	removePhoto(item) {
  		// delete in storage
  		this.$store.dispatch('deletePhoto', item.filename).then(res => {
  			// delete in firestore
  			// delete in app state
  			// console.log('hello', item.id)
        this.$q.notify({ message: 'Delete photo from storage complete', type: 'positive' })

  			this.$store.dispatch('deletePhotoItem', item.id).then(res => {
          this.$q.notify({ message: 'Delete from database complete', type: 'positive' })

  				this.$store.commit('removePhotoFromState', item.filename)
  			}).catch(err => {
          this.$q.notify({ message: 'Fail to delete from database', type: 'negative' })
        })
  		}).catch(err => {
        this.$q.notify({ message: 'Fail to delete from storage', type: 'negative' })
      })
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
