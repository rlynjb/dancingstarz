<template>
<div class="photos-container">
	<q-carousel
	  color="white"
	  arrows
	  quick-nav
	  height="100%"
	>
	  <q-carousel-slide v-for="(item, index) in photos" :key="index" :img-src="photoPath + item.filename" />
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
		photoPath() {
			return this.$store.state.photoPath
		},
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
  	this.getPhoto().then(res => {
  		console.log('hello', res)
  	})
	},
	methods: {
		async getPhoto(filename) {
			let res  = await this.$storage.ref().child('webpics/img1.jpg').getDownloadURL()
	  	return res
		}
	}
}
</script>

<style lang="styl">

</style>