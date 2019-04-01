<template>
<div class="photos-container">
	<q-carousel
	  color="white"
	  arrows
	  quick-nav
	  height="300px"
	  :thumbnails="[
	    'assets/photos/img1.jpg',
	    'assets/photos/img2.jpg',
	    'assets/photos/img3.jpg'
	  ]"
	>
	  <q-carousel-slide img-src="assets/photos/img1.jpg" />
	  <q-carousel-slide img-src="assets/photos/img2.jpg" />
	  <q-carousel-slide img-src="assets/photos/img3.jpg" />
	</q-carousel>
</div>
</template>

<script>
export default {
	data() {
		return {
			//
		}
	}
}
</script>

<style lang="styl">

</style>