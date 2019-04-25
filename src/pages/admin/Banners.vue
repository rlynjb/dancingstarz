<template>
<q-page class="q-pa-lg">
  <q-card class="q-mb-lg">
  	<q-card-main>
      <q-input type="text" v-model="header" stack-label="Header" />
      <q-input type="textarea" rows="7" v-model="desc" stack-label="Desc" />
      <q-uploader :url="url" :upload-factory="uploadFile" auto-expand />

      <!--
      <q-btn color="primary" @click="addBanner">Add</q-btn>
      -->
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
import { storage, firestore } from 'plugins/firebase'


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
  	banners() {
  		return this.$store.state.banners
  	}
  },

  mounted() {
  	//console.log(this.$store.state.photos)
  },

  methods: {
    addBanner() {
      console.log()
    },

  	uploadFile (file, updateProgress) {
    	return new Promise((resolve, reject) => {
    		storage.ref().child('banners/' + file.name).put(file).on('state_changed', (snapshot) => {
    			let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
    			resolve(file)

    			// if upload is complete
    			if (snapshot.bytesTransferred === snapshot.totalBytes) {
	    			// add photo to firestore with id, filename, url
	    			// and push to store photos arr

	    			// get photo url
    				this.$store.dispatch('getBannerUrl', file.name).then(url => {
    					// create photo item in firestore
    					// and store filename and url
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

                // clear fields
                this.header = ''
                this.desc = ''
		    			})

    				})

    			}


    		})
    	})
  	},

  	removePhoto(item) {
  		// delete in storage
  		this.$store.dispatch('deleteBanner', item.filename).then(res => {
  			// delete in firestore
  			// delete in app state
  			// console.log('hello', item.id)
  			this.$store.dispatch('deleteBannerItem', item.id).then(res => {
  				this.$store.commit('removeBannerFromState', item.filename)
  			})
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
