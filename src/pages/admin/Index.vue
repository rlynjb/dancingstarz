<template>
<q-page class="q-pa-lg">
  admin area
  <q-card class="q-mb-lg">
  	<q-card-main>
			<q-uploader :url="url" />
		</q-card-main>
	</q-card>

  <q-list class="">
  	<q-item v-for="(photo, index) in photos" :key="index">
  		<q-item-side>
  			<img :src="photo.url" />
  		</q-item-side>

  		<q-item-main>
  			<h6 class="block">{{ photo.filename }}</h6>	
  		</q-item-main>

  		<q-item-side>
				<q-btn @click="removePhoto">Remove</q-btn>
  		</q-item-side>
  	</q-item>
  </q-list>
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
  },

  methods: {
  	removePhoto() {
  		//
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
