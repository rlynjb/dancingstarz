<template>
<q-page class="q-pa-lg">
  <h4 class="q-mt-none">Photos</h4>
  <q-card class="q-mb-lg">
  	<q-card-main>
      <firebase-quploader ref="quploaderRef"
        directory="webpics" createFileItem="createPhotoItem" pushFilesToState="pushPhotosToState"
        deleteFile="deletePhoto" deleteFileItem="deletePhotoItem" deleteFileFromState="removePhotoFromState"
      />
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
import firebaseQuploader from 'components/firebaseQUploader'


export default {
  name: 'AdminIndex',
  components: {
    firebaseQuploader,
  },
  data() {
  	return {
  	}
  },
  computed: {
  	photos() { return this.$store.state.photos }
  },

  methods: {
  	removePhoto(item) {
      this.$refs.quploaderRef.removeFile(item)
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
