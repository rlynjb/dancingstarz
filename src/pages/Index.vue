<template>
  <q-page>
		<!-- Wrapper -->
		<div id="wrapper">

			<!-- Banner -->
			<section id="banner" class="major row">
				<div class="inner text-center full-width q-pa-xl">
					<header class="major q-mb-xl">
						<h1>Dancing Starz</h1>
						<p class="formerly-known">formerly known as Bropards</p>
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

					<q-btn color="primary" outline>Let's dance!</q-btn>
				</div>
				<div class="banner-bg-overlay"></div>
			</section>

			<!-- Main -->
			<div id="main">

				<!-- One -->
				<section id="one" class="tiles row">
					<article class="col-7 q-pa-xl" style="background-image:url('assets/pic02.jpg')">
						<header class="major">
							<h3><a href="landing.html" class="link">Highlight Event</a></h3>
							<p>Ipsum dolor sit amet</p>
						</header>
					</article>

					<article class="col-5 q-pa-xl" style="background-image:url('assets/pic01.jpg')">
						<header class="major">
							<h3><a href="landing.html" class="link">Photos</a></h3>
							<p>feugiat amet tempus</p>
						</header>
					</article>

					<article class="col-5 q-pa-xl" style="background-image:url('assets/pic04.jpg')">
						<header class="major">
							<h3><a href="landing.html" class="link">Videos</a></h3>
							<p>Lorem etiam nullam</p>
						</header>
					</article>

					<article class="col-7 q-pa-xl" style="background-image:url('assets/pic03.jpg')">
						<header class="major">
							<h3><a href="landing.html" class="link">Featuring Bohol Song Bird</a></h3>
							<p>Nisl sed aliquam</p>
						</header>
					</article>

					<article class="col-7 q-pa-xl" style="background-image:url('assets/pic06.jpg')">
						<header class="major">
							<h3><a href="landing.html" class="link">Everynight featuring DJ Jake or Mike</a></h3>
							<p>Ipsum dolor sit amet</p>
						</header>
					</article>

					<article class="col-5 q-pa-xl" style="background-image:url('assets/pic05.jpg')">
						<header class="major">
							<h3><a href="landing.html" class="link">Food Menu</a></h3>
							<p>Feugiat amet tempus</p>
						</header>
					</article>
				</section>

				<!-- Two -->
				<section id="two" class="row q-pa-xl">
					<div class="inner">
						<header class="major">
							<h2>Events</h2>
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
						<q-field>
							<q-input type="text" v-model="contact.name" placeholder="Name" />
						</q-field>
						<q-field>
							<q-input type="text" v-model="contact.email" placeholder="Email" />
						</q-field>
						<q-field>
							<q-input type="textarea" row="5" v-model="contact.message" placeholder="Message" />
						</q-field>
						<q-btn color="primary">Submit</q-btn>
					</section>

					<section class="split col-5">
						<section>
							<div class="contact-method q-pa-xl">
								<h3>
									<span class="icon alt fas fa-envelope"></span>
									Email
								</h3>
								<a href="#">information@untitled.tld</a>
							</div>
						</section>
						<section>
							<div class="contact-method q-pa-xl">
								<h3>
									<span class="icon alt fas fa-phone"></span>
									Phone
								</h3>
								<span>(000) 000-0000 x12387</span>
							</div>
						</section>
						<section>
							<div class="contact-method q-pa-xl">
								<h3>
									<span class="icon alt fas fa-home"></span>
									Address
								</h3>
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
				<div class="inner q-pa-xl">
					<div class="icons">
						<a href="#" class="icon alt fab fa-twitter"><span class="label"></span></a>
						<a href="#" class="icon alt fab fa-facebook"><span class="label"></span></a>
						<a href="#" class="icon alt fab fa-instagram"><span class="label"></span></a>
						<a href="#" class="icon alt fab fa-youtube"><span class="label"></span></a>
					</div>
					<div class="copyright q-mt-md">
						&copy; Dancing Starz<br>
						Design: <a href="#">wandrr</a>
					</div>
				</div>
			</footer>

		</div>
</q-page>
</template>

<style lang="styl">
@import url('https://fonts.googleapis.com/css?family=Alex+Brush|Allura|Dancing+Script|Great+Vibes|Italianno')

$font1 = 'Dancing Script', cursive
$font2 = 'Great Vibes', cursive
$font3 = 'Allura', cursive
$font4 = 'Alex Brush', cursive
$font5 = 'Italianno', cursive

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
