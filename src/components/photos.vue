<template>
<div class="photos-container">
	<q-carousel
	  color="white"
	  arrows
	  quick-nav
	  height="100%"
	>
	  <q-carousel-slide v-for="(item, index) in photos" :key="index" :img-src="item.url" />
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
		console.log('kirby', this.$store.state.photos)

	},
	methods: {
	}
}
</script>

<style lang="styl">

</style>