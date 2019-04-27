<template>
	<q-uploader ref="quploaderRef" :url="url" :upload-factory="uploadFile" auto-expand clearable />
</template>

<script>
import { storage } from 'plugins/firebase'

export default {
	props: [
		'directory', 'createFileItem', 'pushFilesToState',
		'deleteFile', 'deleteFileItem', 'deleteFileFromState'
	],
	data() {
		return {
			url: '',
		}
	},
	methods: {
  	uploadFile (file, updateProgress) {
    	return new Promise((resolve, reject) => {
    		storage.ref().child(this.directory + '/' + file.name).put(file).on('state_changed', (snapshot) => {
    			let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
    			resolve(file)

    			// if upload is complete
    			if (snapshot.bytesTransferred === snapshot.totalBytes) {
	    			// add photo to firestore with id, filename, url
	    			// and push to store photos arr

            this.$q.notify({ message: 'Upload complete', type: 'positive' })

            // get photo url
            storage.ref().child(this.directory + '/' + file.name).getDownloadURL().then(url => {
    					// create photo item in firestore
    					// and store filename and url
              this.$q.notify({ message: 'Retrieving photo url complete', type: 'positive' })


              /*
								NOTE:
								we can probably move this chunk of code outside of this component
								and move it to the parent component
								since this is involves vuex store dispatch
              */
              // create item for local list
		    			this.$store.dispatch(this.createFileItem, {
		    				filename: file.name,
		    				url: url
		    			}).then(res => {
		    				// push to app photos arr
		    				this.$store.commit(this.pushFilesToState, {
		    					id: res.id,
		    					filename: file.name,
		    					url: url
		    				})

								this.$q.notify({ message: 'Photo reference created complete', type: 'positive' })
		    				this.$refs.quploaderRef.reset()
		    			}) // end - list

            })// end - storage getDownloadURL()

    			}


    		})
    	})
  	},

  	removeFile(item) {
  		// delete in storage
  		storage.ref().child(this.directory + '/' + item.filename).delete().then(res => {
        this.$q.notify({ message: 'Delete photo from storage complete', type: 'positive' })
  		}).catch(err => {
        this.$q.notify({ message: 'Fail to delete from storage', type: 'negative' })
      })


      /*
				NOTE:
				we can probably move this chunk of code outside of this component
				and move it to the parent component
				since this is involves vuex store dispatch
      */
      // delete in firestore
      this.$store.dispatch(this.deleteFileItem, item.id).then(res => {
        this.$q.notify({ message: 'Delete from database complete', type: 'positive' })
      }).catch(err => {
        this.$q.notify({ message: 'Fail to delete from database', type: 'negative' })
      })

      // delete in app state
      this.$store.commit(this.deleteFileFromState, item.filename)
  	}
	}
}
</script>

<style>

</style>
