<template>
<div class="photos-container">
	<q-carousel
	  color="white"
	  arrows
	  quick-nav
	  height="100%"
	>
	  <q-carousel-slide img-src="statics/photos/img1.jpg" />
	  <q-carousel-slide img-src="statics/photos/img2.jpg" />
	  <q-carousel-slide img-src="statics/photos/img3.jpg" />
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
	mounted() {
  	this.$storage.ref().child('webpics/img1.jpg').getDownloadURL()
  		.then(url => {
  			console.log('from firebase', url)
  		})
	}
}
</script>

<style lang="styl">

</style>