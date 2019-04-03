<template>
<div class="photos-container">
	<q-carousel
	  color="white"
	  arrows
	  quick-nav
	  height="300px"
	  :thumbnails="[
	    'statics/photos/img1.jpg',
	    'statics/photos/img2.jpg',
	    'statics/photos/img3.jpg'
	  ]"
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
	}
}
</script>

<style lang="styl">

</style>