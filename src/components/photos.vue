<template>
<div class="photos-container">
	<q-carousel
	  color="white"
	  arrows
	  quick-nav
	  height="100%"
	>
	  <q-carousel-slide v-for="(item, index) in photos" :key="index" :img-src="'statics/photos/'+item.filename" />
	</q-carousel>
</div>
</template>

<script>
export default {
	data() {
		return {
			//
		}
	},
	computed: {
		photos() {
			return this.$store.state.photos
		}
	},
	mounted() {
		/*
			NOTE:
			do a api call of list of photos in db from beforeEnter router,
			store data in store
			in this component, get data from store and v-for in q-carousel slide
		*/
  	this.$storage.ref().child('webpics/img1.jpg').getDownloadURL()
  		.then(url => {
  			console.log('from firebase', url)
  		})
	}
}
</script>

<style lang="styl">

</style>