<template>
  <q-page>
		<!-- Wrapper -->
		<div id="wrapper">

			<!-- Banner -->
			<section id="banner" class="major row">
				<div class="inner text-center full-width q-pa-xl">
					<header class="major q-mb-xl">
						<h1><span>D</span>ance <span>Starz</span> Cafe</h1>
						<p class="formerly-known">formerly known as <b>Bropards</b></p>
					</header>

					<div class="content q-mb-xl">
						<span>Ballroom Dancing</span>
						<b>&#9830;</b>
						<span>Karaoke</span>
						<b>&#9830;</b>
						<span>Rental Special Events</span>
						<b>&#9830;</b>
						<span>Dining</span>
						<b>&#9830;</b>
						<span>Serving Wine and Beer</span>
					</div>

					<q-btn icon="fas fa-gem" color="primary">&nbsp; Let's dance!</q-btn>
				</div>
				<div class="banner-bg-overlay"></div>
			</section>

			<!-- Main -->
			<div id="main">

				<!-- One -->
				<section id="one" class="tiles masonry-layout">
					<article v-for="(banner, index) in banners" :key="index"
						class="masonry-layout-panel block-content">
						<header v-if="banner.header" class="major">
							<h3 class="no-margin">
								<b>&#9830;</b>
								{{ banner.header }}
							</h3>
						</header>

						<div v-if="banner.url" class="image-container">
							<img :src="banner.url" />
						</div>

						<p v-if="banner.desc">
						{{ banner.desc }}
						</p>
					</article>

					<article class="masonry-layout-panel block-content">
						<header class="major">
							<h3 class="no-margin">
								<b>&#9830;</b>
								Photos
							</h3>
						</header>
						<photos />
					</article>

					<article class="masonry-layout-panel block-content">
						<header class="major">
							<h3 class="no-margin">
								<b>&#9830;</b>
								Videos
							</h3>
						</header>
						<videos />
					</article>
				</section>

				<!-- Two -->
				<!--
				<section id="two" class="row q-pa-xl block-content">
					<div class="inner">
						<header class="major">
							<h3 class="no-margin">
								<b>&#9830;</b>
								Events
							</h3>
						</header>

						<events />
					</div>
				</section>
				-->

			</div>

			<!-- Contact -->
			<section id="contact">
				<div class="inner row">
					<!--
					<section class="col-xs-12 col-sm-12 col-md-7 q-pa-xl">
						<h5>
							<q-icon class="icon" name="comment" />
							Contact
						</h5>
						<div class="row gutter-lg">
							<q-field class="col-12">
								<q-input type="text" v-model="contact.name" float-label="Name" />
							</q-field>
							<q-field class="col-12">
								<q-input type="text" v-model="contact.email" float-label="Email" />
							</q-field>
							<q-field class="col-12">
								<q-input type="textarea" rows="5" v-model="contact.message" float-label="Message" />
							</q-field>
							<div class="col-12 text-right">
								<q-btn color="primary">Submit</q-btn>
							</div>
						</div>
					</section>
					-->

					<section class="split col-xs-12 col-sm-12 col-md-12">
						<section>
							<div class="contact-method q-pa-xl">
								<h5>
									<span class="icon alt fas fa-envelope"></span>
									Email
								</h5>
								<a href="mailto:dancestarzcafe@gmail.com">dancestarzcafe@gmail.com</a>
							</div>
						</section>
						<section>
							<div class="contact-method q-pa-xl">
								<h5>
									<span class="icon alt fas fa-phone"></span>
									Phone
								</h5>
								<span><a href="tel:7025924785">(702) 592-4785</a></span>
							</div>
						</section>
						<section>
							<div class="contact-method q-pa-xl">
								<h5>
									<span class="icon alt fas fa-map"></span>
									Address
								</h5>
								<span>3399 S. Jones Blvd.<br />
								Las Vegas, Nevada, 89146<br />
								United States of America</span>
							</div>
						</section>
					</section>
				</div>
			</section>

			<!-- Footer -->
			<footer id="footer">
				<div class="inner q-pt-xl q-pb-lg text-center">
					<div class="icons">
						<a href="https://www.yelp.com/biz/bropards-las-vegas-2" 
							target="_blank" class="icon alt fab fa-yelp">
							<span class="label"></span>
						</a>
						<a href="https://www.facebook.com/dancestarzcafe" target="_blank"
							class="icon alt fab fa-facebook"><span class="label"></span></a>
						<!--
						<a href="#" class="icon alt fab fa-instagram"><span class="label"></span></a>
						-->
						<a href="https://www.youtube.com/channel/UCd0V4RYqcs0oBYYxliIysAQ?view_as=public" 
							target="_blank" class="icon alt fab fa-youtube">
							<span class="label"></span>
						</a>
					</div>
					<div class="copyright q-mt-xl">
						&copy; Dance Starz Cafe - 2019<br>
						website by <a href="#">wandrr</a>
					</div>
				</div>
			</footer>

		</div>
</q-page>
</template>

<script>
import photos from 'components/photos'
import events from 'components/events'
import videos from 'components/videos'

export default {
  name: 'PageIndex',
  components: {
  	photos,
  	events,
  	videos,
  },

  data() {
  	return {
  		contact: {
  			name: '',
  			email: '',
  		}
  	}
  },

  computed: {
  	banners() {
  		return this.$store.state.banners
  	}
  }
}
</script>

<style lang="styl">
@import '~variables'

.masonry-layout {
  column-count: 3;
  -webkit-column-count: 3;
  column-gap: 0;
  -webkit-column-gap: 0;

  @media screen and (max-width: 830px) {
	  column-count: 2;
	  -webkit-column-count: 2;
  }

  @media screen and (max-width: 540px) {
	  column-count: 1
	  -webkit-column-count: 1
  }
}
.masonry-layout-panel {
  break-inside: avoid;
  -webkit-column-break-inside: avoid;
  margin: 10px;
}


.q-carousel-inner
	height: 17em

.foodmenu-img
	width: 100%

header
	.logo
		img
			width: 100%

	.logo-text
		font-family: $font2
		font-size: 2.1em
		display: inline-block
		vertical-align: super
		margin-right: 0.2em

h1
	font-family: $font2
	font-size: 10em
	margin: 0.5em 0

#footer
	.icon
		font-size: 1.5em
		margin-right: 1em


body
	color: #fff
	font-family: $family

a
	color: #fff
	text-decoration: none

header.q-layout-header
	box-shadow: none
	.q-toolbar
		background: $bg !important
		.logo
			width: 3em

#banner
	background-color: $bg
	position: relative
	height: 40em

	.banner-bg-overlay
		background-image: url('../statics/bannergettyimage.jpg')
		width: 100%
		height: 100%
		position: absolute
		opacity: 0.1

	.inner
		position: absolute
		z-index: 1

	.major
		h1
			// text-shadow: 3px 3px 6px #000
			letter-spacing: 0px
			font-size: 9vw
			background: -webkit-linear-gradient(#fff, $primary)
			-webkit-background-clip: text
			-webkit-text-fill-color: transparent
			padding-top: 0.5em

			span
				color: $primary
				font-size: 1.6em

		.formerly-known
			font-size: 1.1em
			margin-top: 0

			b
				font-size: 1.3em

	.content
		> span
			margin: 0 1em
			font-family: $font6
			font-size: 2.3vw
		> b
			color: gray


#main
	background-color: $bg-alt

	.block-content
		background-size: cover
		overflow: hidden
		background: #000
		min-height: 17em
		header
			background: $primary
			padding: 0 1em 0 1em
			z-index: 1
			h3
				font-family: $font6
				font-size: 1.5em
				b
					color: #fff
					font-size: 0.9em

		img
			//-webkit-filter: grayscale(100%); /* Safari */
			//filter: grayscale(100%);
			width: 100%
			//&:hover
				//-webkit-filter: grayscale(0%); /* Safari */
				//filter: grayscale(0%);

		.photos-container
			width: 100%
			height: 100%

#contact
	border-bottom: solid 1px $border
	overflow-x: hidden
	background-color: $bg

	.split
		border-left: 1px solid $border
		> section
			border-bottom: 1px solid $border

	h5
		font-family: $font6
		margin: 1em 0
		.icon
			color: $primary
			margin-right: 0.3em

	input,
	textarea
		color: #fff

#footer
	background-color: $bg

	.copyright
		font-size: 0.8em


</style>
