<template>
  <q-page>
		<!-- Wrapper -->
		<div id="wrapper">

			<!-- Banner -->
			<section id="banner" class="major row">
				<div class="inner text-center full-width q-pa-xl">
					<header class="major q-mb-xl">
						<h1><span>D</span>ancing <span>Starz</span></h1>
						<p class="formerly-known">formerly known as <b>Bropards</b></p>
					</header>

					<div class="content q-mb-xl">
						<span>Dancing Ballroom</span>
						<b>&#9830;</b>
						<span>Karaoke</span>
						<b>&#9830;</b>
						<span>Rental Special Events</span>
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
				<section id="one" class="tiles row">
					<article class="col-7 q-pa-xl block-content" style="background-image:url('assets/pic02.jpg')">
						<header class="major">
							<h3>
								<a href="landing.html" class="link">
									<b>&#9830;</b>Highlight Event
								</a>
							</h3>
							<p>Ipsum dolor sit amet</p>
						</header>
					</article>

					<article class="col-5 q-pa-xl block-content" style="background-image:url('assets/pic01.jpg')">
						<header class="major">
							<h3>
								<a href="landing.html" class="link">
									<b>&#9830;</b>
									Photos
								</a>
							</h3>
							<p>feugiat amet tempus</p>
						</header>
					</article>

					<article class="col-5 q-pa-xl block-content" style="background-image:url('assets/pic04.jpg')">
						<header class="major">
							<h3>
								<a href="landing.html" class="link">
									<b>&#9830;</b>
									Videos
								</a>
							</h3>
							<p>Lorem etiam nullam</p>
						</header>
					</article>

					<article class="col-7 q-pa-xl block-content" style="background-image:url('assets/pic03.jpg')">
						<header class="major">
							<h3>
								<a href="landing.html" class="link">
									<b>&#9830;</b>
									Featuring Bohol Song Bird
								</a>
							</h3>
							<p>Nisl sed aliquam</p>
						</header>
					</article>

					<article class="col-7 q-pa-xl block-content" style="background-image:url('assets/pic06.jpg')">
						<header class="major">
							<h3>
								<a href="landing.html" class="link">
									<b>&#9830;</b>
									Everynight featuring DJ Jake or Mike
								</a>
							</h3>
							<p>Ipsum dolor sit amet</p>
						</header>
					</article>

					<article class="col-5 q-pa-xl block-content" style="background-image:url('assets/pic05.jpg')">
						<header class="major">
							<h3>
								<a href="landing.html" class="link">
									<b>&#9830;</b>
									Food Menu
								</a>
							</h3>
							<p>Feugiat amet tempus</p>
						</header>
					</article>
				</section>

				<!-- Two -->
				<section id="two" class="row q-pa-xl block-content">
					<div class="inner">
						<header class="major">
							<h3>
								<b>&#9830;</b>
								Events
							</h3>
						</header>
						<p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet pharetra et feugiat tempus.</p>
						<ul class="actions">
							<li><a href="landing.html" class="button next">Get Started</a></li>
						</ul>
					</div>
				</section>

			</div>

			<!-- Contact -->
			<section id="contact">
				<div class="inner row">
					<section class="col-7 q-pa-xl">
						<h5>
							<span class="icon alt fas fa-envelope"></span>
							Email
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

					<section class="split col-5">
						<section>
							<div class="contact-method q-pa-xl">
								<h5>
									<span class="icon alt fas fa-envelope"></span>
									Email
								</h5>
								<a href="#">information@untitled.tld</a>
							</div>
						</section>
						<section>
							<div class="contact-method q-pa-xl">
								<h5>
									<span class="icon alt fas fa-phone"></span>
									Phone
								</h5>
								<span>(000) 000-0000 x12387</span>
							</div>
						</section>
						<section>
							<div class="contact-method q-pa-xl">
								<h5>
									<span class="icon alt fas fa-home"></span>
									Address
								</h5>
								<span>1234 Somewhere Road #5432<br />
								Nashville, TN 00000<br />
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
						<a href="#" class="icon alt fab fa-twitter"><span class="label"></span></a>
						<a href="#" class="icon alt fab fa-facebook"><span class="label"></span></a>
						<a href="#" class="icon alt fab fa-instagram"><span class="label"></span></a>
						<a href="#" class="icon alt fab fa-youtube"><span class="label"></span></a>
					</div>
					<div class="copyright q-mt-xl">
						&copy; Dancing Starz<br>
						website by <a href="#">wandrr</a>
					</div>
				</div>
			</footer>

		</div>
</q-page>
</template>

<style lang="styl">
@import '~variables'

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

header
	.q-toolbar
		background: $bg !important

#banner
	background-color: $bg
	position: relative
	height: 40em

	.banner-bg-overlay
		background-image: url('../assets/bannergettyimage.jpg')
		width: 100%
		height: 100%
		position: absolute
		opacity: 0.1

	.inner
		position: absolute
		z-index: 1

	.major
		h1
			text-shadow: 3px 3px 6px #000
			letter-spacing: 0px
			span
				color: $primary
		.formerly-known
			font-size: 1.1em
			margin-top: -4em
			b
				font-size: 1.3em

	.content
		> span
			margin: 0 1em
			font-family: $font6
			font-size: 1.5em
		> b
			color: gray


#main
	background-color: $bg-alt

	.block-content
		header
			h3
				font-family: $font6
				font-size: 2em
				b
					color: $primary
					font-size: 0.9em

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

	input,
	textarea
		color: #fff

#footer
	background-color: $bg

	.copyright
		font-size: 0.8em


</style>

<script>
export default {
  name: 'PageIndex',
  data() {
  	return {
  		contact: {
  			name: '',
  			email: '',
  		}
  	}
  }
}
</script>
