<script lang="ts">
	import { Head } from '~lib';
	const host = import.meta.env.VITE_HOST;
	const apiHost = import.meta.env.VITE_API_HOST;

	export let data;
</script>

<Head
	title={data.title}
	description={data.description}
	canonical="{host}/about-us"
	og_type="website"
	imageUrl="{apiHost}/uploads/ath-logo.png"
	imageWidth="1000"
	imageHeight="1000"
	articleLink="{host}/about-us"
/>

<div class="about-page">
	<!-- Hero Section -->
	<section class="hero-section">
		<div class="hero-content">
			<h1 class="hero-title">About ATH.live</h1>
			<p class="hero-subtitle">Your Guide to the Future of Finance</p>
			<div class="hero-text">
				<p>
					ATH.live is the essential media platform for digital nomads, cryptocurrency enthusiasts, and Web3 pioneers navigating the Fourth Industrial Revolution. We transform complex blockchain technology and decentralized finance into clear, actionable insights through explanatory journalism.
				</p>
			</div>
		</div>
		<div class="hero-image">
			<img src="/img/banners/banner_v2_1.png" alt="ATH.live Platform" />
		</div>
	</section>

	<!-- Mission Section -->
	<section class="mission-section">
		<h2 class="section-title">Our Mission: Education Over Speculation</h2>
		
		<div class="mission-content">
			<div class="mission-pillars">
				<div class="pillar">
					<h3>1. Premier Platform for Digital Nomads</h3>
					<p>We serve the global workforce that demands financial literacy for a decentralized economy. Whether you're earning in crypto, investing across borders, or building Web3 products, our news coverage delivers the intelligence you need.</p>
				</div>
				<div class="pillar">
					<h3>2. Inspire Next Generation of Crypto Leaders</h3>
					<p>From Bitcoin fundamentals to Ethereum smart contracts, our educational articles break down complex topics into digestible insights. We're not just reporting the news—we're building the knowledge base for tomorrow's innovators.</p>
				</div>
				<div class="pillar">
					<h3>3. Shape the Fourth Industrial Revolution</h3>
					<p>Through in-depth analysis of blockchain technology, DeFi protocols, and crypto market trends, we help readers understand how digital assets are reshaping global finance.</p>
				</div>
			</div>
		</div>
	</section>

	<!-- What Makes Us Different -->
	<section class="differences-section">
		<h2 class="section-title">What Makes ATH.live Different</h2>

		<div class="differences-grid">
			<div class="difference-card">
				<h3>Multilingual & Globally Accessible</h3>
				<p>
					Financial revolution shouldn't have language barriers. Our content reaches audiences worldwide, ensuring the crypto economy is truly inclusive.
				</p>
			</div>

			<div class="difference-card">
				<h3>Explanatory Journalism That Empowers</h3>
				<p>
					We don't just report price movements—we explain the underlying technology, regulatory impacts, and real-world applications.
				</p>
			</div>

			<div class="difference-card">
				<h3>Commitment to Diversity</h3>
				<p>
					We aim for balanced representation (50% female, 50% male audience) because the future of finance should be built by everyone.
				</p>
			</div>

			<div class="difference-card">
				<h3>Privacy-First Approach</h3>
				<p>
					Your trust is paramount. Learn how we protect your data in our <a href="{host}/privacy-policy">Privacy Policy</a>.
				</p>
			</div>
		</div>
	</section>

	<!-- Content Pillars -->
	<section class="content-pillars-section">
		<h2 class="section-title">Our Content Pillars</h2>

		<div class="pillars-grid">
			<div class="pillar-item">
				<h3>Breaking News & Analysis</h3>
				<p>Stay current with our latest news covering:</p>
				<ul>
					<li>Market-moving announcements</li>
					<li>Protocol launches and updates</li>
					<li>Regulatory shifts and policy changes</li>
					<li>Industry partnerships and acquisitions</li>
				</ul>
			</div>

			<div class="pillar-item">
				<h3>Educational Resources</h3>
				<p>From beginners to experts, we serve all knowledge levels:</p>
				<ul>
					<li>Blockchain technology fundamentals</li>
					<li>Cryptocurrency trading strategies</li>
					<li>Smart contract development</li>
					<li>Web3 business models</li>
				</ul>
			</div>

			<div class="pillar-item">
				<h3>Event Coverage & Industry Insights</h3>
				<p>Connect with the global crypto community through our events section:</p>
				<ul>
					<li>Major blockchain conferences</li>
					<li>Virtual summits and webinars</li>
					<li>Product launches and demos</li>
					<li>Networking opportunities for digital nomads</li>
				</ul>
			</div>
		</div>
	</section>

	<!-- Our Promise -->
	<section class="promise-section">
		<h2 class="section-title">Our Promise to Readers</h2>

		<div class="promise-grid">
			<div class="promise-card">
				<h3>Accuracy Over Speed</h3>
				<p>We verify information before publication, prioritizing truth over traffic.</p>
			</div>

			<div class="promise-card">
				<h3>Clarity Over Jargon</h3>
				<p>Complex topics explained in plain language, making crypto accessible to all.</p>
			</div>

			<div class="promise-card">
				<h3>Context Over Clickbait</h3>
				<p>Deep dives that matter, not sensational headlines designed to manipulate.</p>
			</div>

			<div class="promise-card">
				<h3>Independence Over Influence</h3>
				<p>Our editorial integrity is non-negotiable. We serve readers, not advertisers.</p>
			</div>
		</div>
	</section>

	<!-- Philosophy & CTA Banner -->
	<section class="cta-banner">
		<div class="cta-content">
			<h2>Make Your Brain: Our Philosophy</h2>
			<p>
				This isn't just a tagline—it's our commitment. We provide the frameworks, data, and analysis you need to form your own educated opinions about cryptocurrency markets, blockchain technology, and the decentralized future.
			</p>
			<p>
				We don't tell you what to buy or which protocol to trust. We give you the knowledge to decide for yourself.
			</p>
			<a href="{host}/contact-us" class="cta-button">Join Our Community</a>
		</div>
		<div class="cta-image">
			<img src="/img/banners/banner_v2_2.png" alt="Philosophy" />
		</div>
	</section>

	<!-- Join Community -->
	<section class="community-section">
		<h2 class="section-title">Join the ATH.live Community</h2>
		
		<div class="community-grid">
			<div class="community-item">
				<h4>Wealth managers</h4>
				<p>Seeking crypto market intelligence</p>
			</div>
			<div class="community-item">
				<h4>Investment strategists</h4>
				<p>Tracking DeFi innovations</p>
			</div>
			<div class="community-item">
				<h4>Digital nomads</h4>
				<p>Navigating global finance</p>
			</div>
			<div class="community-item">
				<h4>Web3 developers</h4>
				<p>Building decentralized applications</p>
			</div>
			<div class="community-item">
				<h4>Curious learners</h4>
				<p>Exploring cryptocurrency fundamentals</p>
			</div>
		</div>

		<div class="contact-box">
			<h3>Connect With Us</h3>
			<p>Ready to collaborate, pitch a story, or ask a question? Visit our <a href="{host}/contact-us">Contact Us page</a> to reach our editorial team.</p>
			<p><strong>Email:</strong> <a href="mailto:info@ath.live">info@ath.live</a></p>
			<p><strong>Response Time:</strong> 24-48 hours for all professional inquiries</p>
		</div>
	</section>
</div>

<style>
	:global(body) {
		background-color: #ffffff;
	}

	.about-page {
		width: 100%;
		max-width: 100%;
		padding: 0;
	}

	/* Hero Section */
	.hero-section {
		display: flex;
		align-items: center;
		gap: 60px;
		padding: 60px;
		background: #f8f9fa;
		border-radius: 25px;
		margin-bottom: 35px;
	}

	.hero-content {
		flex: 1;
		max-width: 550px;
	}

	.hero-title {
		font-family: 'Playfair Display', serif;
		font-size: 42px;
		font-weight: 500;
		line-height: 56px;
		color: #000000;
		margin-bottom: 10px;
	}

	.hero-subtitle {
		font-family: 'Playfair Display', serif;
		font-size: 24px;
		font-weight: 400;
		color: #1ca167;
		margin-bottom: 30px;
	}

	.hero-text {
		font-family: 'Futura', sans-serif;
		font-size: 14px;
		font-weight: 500;
		line-height: 20px;
		color: #454545;
	}

	.hero-image {
		flex: 1;
		width: 433px;
		height: 300px;
		border-radius: 10px;
		overflow: hidden;
	}

	.hero-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	/* Mission Section */
	.mission-section {
		padding: 30px;
		margin-bottom: 35px;
	}

	.section-title {
		font-family: 'Playfair Display', serif;
		font-size: 42px;
		font-weight: 700;
		line-height: 56px;
		color: #000000;
		margin-bottom: 30px;
		text-transform: capitalize;
	}

	.mission-pillars {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 20px;
	}

	.pillar {
		padding: 20px;
		background: #f0f7f3;
		border-radius: 10px;
		border-left: 5px solid #1ca167;
	}

	.pillar h3 {
		font-family: 'Playfair Display', serif;
		font-size: 18px;
		font-weight: 600;
		color: #000000;
		margin-bottom: 15px;
	}

	.pillar p {
		font-family: 'Futura', sans-serif;
		font-size: 14px;
		line-height: 20px;
		color: #454545;
		margin: 0;
	}

	/* Differences Section */
	.differences-section {
		padding: 30px;
		margin-bottom: 35px;
	}

	.differences-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 20px;
	}

	.difference-card {
		padding: 20px;
		background: #ffffff;
		border: 1px solid #e0e0e0;
		border-radius: 10px;
		transition: all 0.3s ease;
	}

	.difference-card:hover {
		box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
		border-color: #1ca167;
	}

	.difference-card h3 {
		font-family: 'Playfair Display', serif;
		font-size: 18px;
		font-weight: 600;
		color: #000000;
		margin-bottom: 15px;
	}

	.difference-card p {
		font-family: 'Futura', sans-serif;
		font-size: 14px;
		line-height: 20px;
		color: #454545;
		margin: 0;
	}

	.difference-card a {
		color: #1ca167;
		text-decoration: none;
		font-weight: 600;
	}

	.difference-card a:hover {
		text-decoration: underline;
	}

	/* Content Pillars Section */
	.content-pillars-section {
		padding: 30px;
		margin-bottom: 35px;
	}

	.pillars-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 20px;
	}

	.pillar-item {
		padding: 20px;
		background: #f9f9f9;
		border-radius: 10px;
	}

	.pillar-item h3 {
		font-family: 'Playfair Display', serif;
		font-size: 18px;
		font-weight: 600;
		color: #000000;
		margin-bottom: 15px;
	}

	.pillar-item p {
		font-family: 'Futura', sans-serif;
		font-size: 14px;
		font-weight: 500;
		color: #454545;
		margin-bottom: 15px;
	}

	.pillar-item ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.pillar-item li {
		font-family: 'Futura', sans-serif;
		font-size: 13px;
		color: #454545;
		padding-left: 20px;
		margin-bottom: 8px;
		position: relative;
	}

	.pillar-item li:before {
		content: "→";
		position: absolute;
		left: 0;
		color: #1ca167;
	}

	/* Promise Section */
	.promise-section {
		padding: 30px;
		margin-bottom: 35px;
	}

	.promise-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 20px;
	}

	.promise-card {
		padding: 20px;
		background: linear-gradient(135deg, #f0f7f3 0%, #ffffff 100%);
		border-radius: 10px;
		text-align: center;
	}

	.promise-card h3 {
		font-family: 'Playfair Display', serif;
		font-size: 18px;
		font-weight: 700;
		color: #1ca167;
		margin-bottom: 15px;
	}

	.promise-card p {
		font-family: 'Futura', sans-serif;
		font-size: 14px;
		line-height: 20px;
		color: #454545;
		margin: 0;
	}

	/* CTA Banner */
	.cta-banner {
		display: flex;
		align-items: center;
		gap: 40px;
		padding: 40px;
		background: linear-gradient(135deg, #212FB2 0%, #1a1f8a 100%);
		border-radius: 15px;
		margin-bottom: 35px;
		position: relative;
		overflow: hidden;
	}

	.cta-content {
		flex: 1;
		color: white;
		z-index: 2;
	}

	.cta-content h2 {
		font-family: 'Playfair Display', serif;
		font-size: 42px;
		font-weight: 700;
		line-height: 56px;
		color: #ffffff;
		margin-bottom: 20px;
	}

	.cta-content p {
		font-family: 'Futura', sans-serif;
		font-size: 16px;
		line-height: 24px;
		color: rgba(255, 255, 255, 0.95);
		margin-bottom: 15px;
	}

	.cta-button {
		display: inline-block;
		padding: 12px 40px;
		background: #1ca167;
		color: white;
		text-decoration: none;
		border-radius: 5px;
		font-family: 'Futura', sans-serif;
		font-weight: 600;
		font-size: 14px;
		transition: all 0.3s ease;
		margin-top: 15px;
	}

	.cta-button:hover {
		background: #158d55;
		transform: translateY(-2px);
	}

	.cta-image {
		flex: 1;
		width: 350px;
		height: 300px;
		border-radius: 10px;
		overflow: hidden;
		z-index: 2;
	}

	.cta-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	/* Community Section */
	.community-section {
		padding: 30px;
		margin-bottom: 35px;
	}

	.community-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 20px;
		margin-bottom: 30px;
	}

	.community-item {
		padding: 20px;
		text-align: center;
		background: #f8f9fa;
		border-radius: 10px;
	}

	.community-item h4 {
		font-family: 'Playfair Display', serif;
		font-size: 16px;
		font-weight: 600;
		color: #000000;
		margin-bottom: 10px;
	}

	.community-item p {
		font-family: 'Futura', sans-serif;
		font-size: 13px;
		color: #454545;
		margin: 0;
	}

	.contact-box {
		background: #f0f7f3;
		padding: 25px;
		border-radius: 10px;
		border-left: 5px solid #1ca167;
	}

	.contact-box h3 {
		font-family: 'Playfair Display', serif;
		font-size: 24px;
		font-weight: 700;
		color: #000000;
		margin-bottom: 20px;
	}

	.contact-box p {
		font-family: 'Futura', sans-serif;
		font-size: 14px;
		line-height: 20px;
		color: #454545;
		margin-bottom: 10px;
	}

	.contact-box a {
		color: #1ca167;
		text-decoration: none;
		font-weight: 600;
	}

	.contact-box a:hover {
		text-decoration: underline;
	}

	/* Responsive */
	@media (max-width: 768px) {
		.hero-section,
		.mission-section,
		.differences-section,
		.content-pillars-section,
		.promise-section,
		.community-section {
			padding: 20px;
		}

		.hero-section {
			flex-direction: column;
			gap: 20px;
		}

		.hero-image {
			width: 100%;
			height: 250px;
		}

		.cta-banner {
			flex-direction: column;
			gap: 20px;
			padding: 20px;
		}

		.cta-image {
			width: 100%;
			height: 250px;
		}

		.hero-title,
		.section-title,
		.cta-content h2 {
			font-size: 28px;
			line-height: 36px;
		}

		.mission-pillars,
		.pillars-grid,
		.differences-grid,
		.promise-grid,
		.community-grid {
			grid-template-columns: 1fr;
		}

		.hero-content {
			max-width: 100%;
		}

		.hero-section {
			margin-bottom: 30px;
		}

		.section-title {
			margin-bottom: 20px;
		}
	}

	@media (max-width: 480px) {
		.hero-section,
		.mission-section,
		.differences-section,
		.content-pillars-section,
		.promise-section,
		.community-section {
			padding: 20px;
		}

		.hero-title,
		.section-title,
		.cta-content h2 {
			font-size: 24px;
			line-height: 32px;
		}

		.hero-subtitle {
			font-size: 18px;
		}

		.pillar h3,
		.difference-card h3,
		.pillar-item h3,
		.promise-card h3,
		.community-item h4 {
			font-size: 16px;
		}
	}
</style>
