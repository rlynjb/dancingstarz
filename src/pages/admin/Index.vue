<template>
<q-page class="q-pa-lg">
  admin area
  <q-list class="row">
  	<q-item class="col-2" v-for="(photo, index) in photos" :key="index">
  		<h6 class="block">{{ photo.filename }}</h6>
  		<br>
  		<img :src="photo.url" />
  	</q-item>
  </q-list>


  <q-uploader :url="url" />
</q-page>
</template>

<script>
export default {
  name: 'AdminIndex',

  data() {
  	return {
  		url: '',
  	}
  },

  computed: {
  	photos() {
  		return this.$store.state.photos
  	}
  }
}
</script>

<style lang="styl">
@import '~variables'
.q-item
	img
		width: 100%

</style>
