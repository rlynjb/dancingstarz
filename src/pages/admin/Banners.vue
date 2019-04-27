<template>
<q-page class="q-pa-lg">
  <h4 class="q-mt-none">Banners</h4>
  <q-card class="q-mb-lg">
  	<q-card-main>
      <q-input type="text" v-model="header" stack-label="Header" />
      <q-input type="textarea" rows="7" v-model="desc" stack-label="Desc" />
      <q-uploader ref="quploaderRef" :url="url" :upload-factory="uploadFile" auto-expand clearable />

		</q-card-main>
	</q-card>

  <q-list class="row">
  	<q-item class="col-sm-12 col-md-6" v-for="(banner, index) in banners" :key="index">
  		<q-item-side>
  			<img :src="banner.url" />
  		</q-item-side>

  		<q-item-main>
        <h4 class="no-margin">{{ banner.header }}</h4>
  			<h6 class="no-margin">{{ banner.filename }}</h6>
        <p class="no-margin">{{ banner.desc }}</p>
  		</q-item-main>

  		<q-item-side>
				<q-btn @click="removePhoto(banner)">Remove</q-btn>
  		</q-item-side>
  	</q-item>
  </q-list>
</q-page>
</template>

<script>
import { storage } from 'plugins/firebase'


export default {
  name: 'AdminIndex',
  data() {
  	return {
      header: '',
      desc: '',
  		url: ''
  	}
  },

  computed: {
  	banners() { return this.$store.state.banners }
  },

  methods: {
  	uploadFile (file, updateProgress) {
    	return new Promise((resolve, reject) => {
    		storage.ref().child('banners/' + file.name).put(file).on('state_changed', (snapshot) => {
    			let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
    			resolve(file)

    			// if upload is complete
    			if (snapshot.bytesTransferred === snapshot.totalBytes) {
	    			// add photo to firestore with id, filename, url
	    			// and push to store photos arr

            this.$q.notify({ message: 'Upload complete', type: 'positive' })

	    			// get photo url
    				storage.ref().child('banners/' + file.name).getDownloadURL().then(url => {
    					// create photo item in firestore
    					// and store filename and url
              this.$q.notify({ message: 'Retrieving photo url complete', type: 'positive' })


		    			this.$store.dispatch('createBannerItem', {
		    				filename: file.name,
		    				url: url,
                header: this.header,
                desc: this.desc
		    			}).then(res => {

		    				// push to app photos arr
		    				this.$store.commit('pushBannersToState', {
		    					filename: file.name,
		    					url: url,
                  header: this.header,
                  desc: this.desc
		    				})

                this.$q.notify({ message: 'Photo reference created complete', type: 'positive' })

                // clear fields
                this.header = ''
                this.desc = ''
                this.$refs.quploaderRef.reset()
		    			})

    				})

    			}


    		})
    	})
  	},

  	removePhoto(item) {
      // delete in storage
      storage.ref().child('banners/' + item.filename).delete().then(res => {
        this.$q.notify({ message: 'Delete photo from storage complete', type: 'positive' })
      }).catch(err => {
        this.$q.notify({ message: 'Fail to delete from storage', type: 'negative' })
      })

      // delete in firestore
      this.$store.dispatch('deleteBannerItem', item.id).then(res => {
        this.$q.notify({ message: 'Delete from database complete', type: 'positive' })
      }).catch(err => {
        this.$q.notify({ message: 'Fail to delete from database', type: 'negative' })
      })

      // delete in app state
      this.$store.commit('removeBannerFromState', item.filename)
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
