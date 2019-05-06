<template>
<div class="q-pa-xl">
	<h4>DanceStarzCafe.com CMS</h4>
	<q-input type="text" v-model="email" float-label="Email" />
	<q-input type="password" v-model="password" float-label="Password" />
	<q-btn color="primary" class="float-right q-mt-lg" @click="loginOnClick">Login</q-btn>
</div>
</template>

<script>
export default {
	data() {
		return {
			email: '',
			password: ''
		}
	},

	methods: {
		loginOnClick() {
			if (this.$store.state.login.email === this.email && this.$store.state.login.password === this.password) {
				//alert('successfully logged in!')
				this.$store.commit('setAuth', true)
				// redirect to dashboard
				this.$router.push({path: '/dashboard'})
			} else {
				alert('Wrong credentials.')
				this.$store.commit('setAuth', false)
			}
		}
	}
}
</script>

<style>

</style>
