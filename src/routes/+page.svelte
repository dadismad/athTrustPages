<script lang="ts">

	import { Carousel, ArticlesBlock, Footer, Head } from '~lib';

	const host = import.meta.env.VITE_HOST;
	const apiHost = import.meta.env.VITE_API_HOST;

	export let data;

	$: news = data?.news?.result;

</script>

<Head
	title="All Time High"
	description="All-Time High: The new crypto media for digital nomads! We are growing a new generation of cryptocurrency users! Make your brain! info@ath.live"
	imageUrl={`${apiHost}/uploads/u4568294993_create_a_cover_for_an_article_with_this_title_The_3ace17b7_28c0_476f_af99_99117e0dfec0_0_2_1bc715056d.png`}
	imageWidth="1000"
	imageHeight="1000"
	articleLink={host}
	og_type="website"
	canonical="https://ath.live"
/>

<div class="container">

	<div class="pb-2 mb-2 pb-md-2 mb-md-2">
		<div class="d-none d-sm-block">

			<Carousel
				interval={7000}
				hideIndicators={true}
				images={[{
						img: '/img/banners/banner_v2_1.png',
						link: 'https://okx.com/join/ATHLIVE'
					}, {
						img: '/img/banners/banner_v2_2.png',
						link: `${host}/events`
					}
				]}
				ratio={0.1666666}
			/>
		</div>
		<div class="d-block d-sm-none">
			<Carousel
				interval={7000}
				hideIndicators={true}
				images={[{
						img: '/img/banners/banner_v2_1_mobile.png',
						link: 'https://okx.com/join/ATHLIVE'
					}, {
						img: '/img/banners/banner_v2_2_mobile.png',
						link: `${host}/events`
					}
				]}
				ratio={0.8}
			/>
		</div>
	</div>

	<div class="mb-3">
		<div class="coin-gecko-widget-container">
			<gecko-coin-price-marquee-widget 
				locale="en" 
				dark-mode="true" 
				transparent-background="true" 
				coin-ids="" 
				initial-currency="usd">
			</gecko-coin-price-marquee-widget>
		</div>
	</div>

	<!-- Platform Introduction Section -->
	<div class="platform-intro mb-4">
		<div class="intro-content">
			<h2>Crypto Intelligence for Digital Nomads, Traders & Web3 Builders</h2>
			<p>
				ATH.live is the essential media platform for cryptocurrency news, market analysis, and blockchain education. 
				We deliver breaking news on Bitcoin, Ethereum, DeFi protocols, Layer 2 solutions, and emerging crypto opportunities. 
				Whether you're researching your next investment, building Web3 products, or staying ahead of market movements, 
				our explanatory journalism cuts through the noise. Learn more about <a href="{host}/about-us">our mission</a>, 
				explore our <a href="{host}/categories">news categories</a>, check upcoming <a href="{host}/events">crypto events</a>, 
				or <a href="{host}/contact-us">reach out to our team</a>.
			</p>
		</div>
	</div>

	{#if news?.data}
		<ArticlesBlock articles={news.data} />
	{:else}
		<h2>Server error</h2>
	{/if}

	<div class="my-5 text-center pb-5">
		<a class="show-more-button" href={`${host}/page/2`}>Show more</a>
	</div>

	<div id="about">

		<div class="mb-5">
			<img src={`${host}/img/about/banner_about.png`} alt="" class="image">
		</div>

		<div class="mb-5">

			<div class="row mb-5">

				<div class="col-md-12">
					<div class="mb-5">
						<h2 id="about">What is ATH?</h2>
						<p>“ATH” stands for All Time High, a term widely recognized in the world of finance and cryptocurrency. It refers to the highest price a coin has ever reached in its history. But for us, ATH is more than just a market term—it’s a mindset.</p>
					</div>
					<div class="mb-5">
						<h2>Our Format: Explanatory Journalism</h2>
						<p>We specialize in explanatory journalism—a style of storytelling that breaks down complex topics into clear, digestible insights. Whether you’re a seasoned expert or completely new to cryptocurrency, we make understanding the digital world simple and engaging.</p>
					</div>
				</div>

				<div class="col-md-12">
					<img src={`${host}/img/about/illustration_about.jpeg`} alt="about us" style="width: 100%; border-radius: 12px;">
				</div>
			</div>

			<div class="mb-5">
				<h2 class="mb-3">Our Mission</h2>
				<div class="row" style="align-content: stretch; align-items: stretch;">
					<div class="col-md-8 mb-1">
						<div class="mission-card">
							Become the go-to media platform for digital nomads.
						</div>
					</div>
					<div class="col-md-8 mb-1">
						<div class="mission-card">
							Inspire a new generation of cryptocurrency enthusiasts.
						</div>
					</div>
					<div class="col-md-8 mb-1">
						<div class="mission-card">
							Educate future leaders in the Web3 and crypto industries to help shape the Fourth Industrial Revolution.
						</div>
					</div>
				</div>
			</div>

			<div class="row">
				<div class="col-md-8 mb-5 mb-md-0">
					<h4>Our Solution</h4>
					We offer multilingual content designed for a global audience, bringing clarity to the complex through explanatory journalism.
				</div>

				<div class="col-md-8 mb-5 mb-md-0">
					<h4>Our Promise</h4>
					We aim for inclusivity, targeting a balanced 50% female and 50% male audience.
				</div>

				<div class="col-md-8 mb-5 mb-md-0">
					<h4>Our Slogan</h4>
					MAKE YOUR BRAIN!
				</div>
			</div>


		</div>


	</div>

	<Footer />

</div>

<style lang="scss">

	.platform-intro {
		background: linear-gradient(135deg, #f0f7f3 0%, #f9f9f9 100%);
		border-left: 5px solid #1ca167;
		padding: 30px;
		border-radius: 10px;
		margin-bottom: 2rem;
	}

	.platform-intro h2 {
		font-family: 'Playfair Display', serif;
		font-size: 28px;
		font-weight: 700;
		color: #000000;
		margin-bottom: 15px;
	}

	.platform-intro p {
		font-family: 'Futura', sans-serif;
		font-size: 14px;
		line-height: 22px;
		color: #454545;
		margin: 0;
	}

	.coin-gecko-widget-container {
		padding: .5rem 1rem;
		border-radius: var(--border-radius-control);
		background: var(--color-bg-inv-100);
	}

	.show-more-button {
    padding: 1rem 1.75rem;
		border-radius: var(--border-radius-control);
		background: var(--color-bg-inv-100);
		color: var(--color-text-inv-100);
	}

	.mission-card {
    padding: 1rem;
		background: var(--color-bg-base-200);
		border-radius: var(--border-radius-panel);
    height: 100%;
	}
</style>
