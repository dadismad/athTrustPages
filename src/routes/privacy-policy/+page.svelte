<script lang="ts">
	import { Head } from '~lib';
	const host = import.meta.env.VITE_HOST;
	const apiHost = import.meta.env.VITE_API_HOST;

	export let data;
</script>

<Head
	title={data.title}
	description={data.description}
	canonical="{host}/privacy-policy"
	og_type="website"
	imageUrl="{apiHost}/uploads/ath-logo.png"
	imageWidth="1000"
	imageHeight="1000"
	articleLink="{host}/privacy-policy"
/>

<div class="privacy-page">
	<!-- Hero Section -->
	<section class="hero-section">
		<div class="hero-content">
			<h1 class="hero-title">Privacy Policy & Disclaimer</h1>
			<p class="hero-subtitle">Your Trust is Our Priority</p>
			<div class="hero-text">
				<p>
					This Privacy Policy explains how ATH.live collects, uses, stores, and protects your information. We're committed to transparent data practices and your privacy rights under GDPR, CCPA, and similar regulations.
				</p>
			</div>
		</div>
	</section>

	<!-- Main Content -->
	<div class="privacy-content">

			<!-- Section 1 -->
			<section class="mb-5">
				<h2 class="h2 mb-4">1. Information We Collect</h2>

				<div class="mb-4">
					<h3 class="h4 mb-3">1.1. Information You Provide Directly</h3>
					<p class="mb-2">We may collect:</p>
					<ul>
						<li>Contact Information: Your name and email address when you subscribe to newsletters or contact us</li>
						<li>Form Submissions: Information you provide through feedback or inquiry forms</li>
						<li>Account Details: If we implement user registration for personalized news feeds or event attendance</li>
					</ul>
				</div>

				<div class="mb-4">
					<h3 class="h4 mb-3">1.2. Information Collected Automatically</h3>
					<p class="mb-2">When you browse our news categories or events section, we automatically collect:</p>
					<ul class="mb-3">
						<li>IP address and geolocation data</li>
						<li>Browser type, device information, and operating system</li>
						<li>Timestamps of visits and pages viewed</li>
						<li>Referral sources (how you found ATH.live)</li>
						<li>User behavior patterns (articles read, time spent on pages)</li>
					</ul>
					<p>This data is collected through cookies and analytics tools such as Google Analytics and Cloudflare Analytics to improve your experience and our content quality.</p>
				</div>

				<div>
					<h3 class="h4 mb-3">1.3. Cookies and Similar Technologies</h3>
					<p class="mb-2">We use cookies to:</p>
					<ul class="mb-0">
						<li>Ensure proper website functionality across all pages</li>
						<li>Remember your preferences (language, region, content categories)</li>
						<li>Analyze traffic patterns to improve our crypto news coverage</li>
						<li>Provide relevant content recommendations based on your interests</li>
					</ul>
				</div>
			</section>

			<!-- Section 2 -->
			<section class="mb-5">
				<h2 class="h2 mb-4">2. How We Use Your Information</h2>
				<p class="mb-3">We use collected data to:</p>

				<div class="card border-0 bg-light p-4 mb-3">
					<h3 class="h5 mb-3">Operate and Improve Our Platform</h3>
					<ul class="mb-0">
						<li>Maintain website performance and security</li>
						<li>Analyze which news categories and events resonate with readers</li>
						<li>Optimize content delivery for digital nomads and crypto enthusiasts worldwide</li>
					</ul>
				</div>

				<div class="card border-0 bg-light p-4 mb-3">
					<h3 class="h5 mb-3">Enhance Content Quality</h3>
					<ul class="mb-0">
						<li>Understand which blockchain topics and cryptocurrency news generate the most interest</li>
						<li>Identify knowledge gaps to create better educational content</li>
						<li>Develop new features based on user behavior</li>
					</ul>
				</div>

				<div class="card border-0 bg-light p-4 mb-3">
					<h3 class="h5 mb-3">Protect Platform Integrity</h3>
					<ul class="mb-0">
						<li>Detect and prevent spam, fraud, and malicious activity</li>
						<li>Ensure compliance with applicable regulations</li>
						<li>Safeguard user data from unauthorized access</li>
					</ul>
				</div>

				<div class="card border-0 bg-light p-4">
					<h3 class="h5 mb-3">Send Communications (With Consent)</h3>
					<ul class="mb-0">
						<li>Newsletter updates on breaking crypto news</li>
						<li>Event notifications for upcoming blockchain conferences</li>
						<li>Editorial announcements and platform updates</li>
					</ul>
				</div>

				<p class="mt-4 mb-0"><strong>We do NOT sell your personal information to third parties under any circumstances.</strong></p>
			</section>

			<!-- Section 3 -->
			<section class="mb-5">
				<h2 class="h2 mb-4">3. Sharing Information with Third Parties</h2>
				<p class="mb-3">We may share data only with:</p>

				<div class="card border-0 bg-light p-4 mb-3">
					<h3 class="h5 mb-3">Analytics Providers</h3>
					<ul class="mb-0">
						<li>Google Analytics (for website traffic analysis)</li>
						<li>Cloudflare Analytics (for performance monitoring)</li>
					</ul>
				</div>

				<div class="card border-0 bg-light p-4 mb-3">
					<h3 class="h5 mb-3">Email Distribution Services</h3>
					<p class="mb-0">To send newsletters and event updates (only if you've subscribed)</p>
				</div>

				<div class="card border-0 bg-light p-4 mb-3">
					<h3 class="h5 mb-3">Hosting Providers</h3>
					<p class="mb-0">Infrastructure partners maintaining our servers and databases</p>
				</div>

				<div class="card border-0 bg-light p-4">
					<h3 class="h5 mb-3">Legal Authorities</h3>
					<p class="mb-0">When required by law or to protect our legal rights</p>
				</div>

				<p class="mt-4 mb-0">All third-party partners process data according to their respective privacy policies and applicable data protection laws.</p>
			</section>

			<!-- Section 4 -->
			<section class="mb-5">
				<h2 class="h2 mb-4">4. Data Storage and Security</h2>
				<p class="mb-3">We implement robust technical and organizational measures to protect your information:</p>

				<h3 class="h5 mb-3">Security Measures:</h3>
				<ul class="mb-4">
					<li>Encrypted data transfer (HTTPS across all pages)</li>
					<li>Restricted access to servers and databases</li>
					<li>Regular security audits and vulnerability assessments</li>
					<li>Protection against cyberattacks and unauthorized access</li>
				</ul>

				<p class="mb-3"><strong>Data Retention:</strong> We retain data only as long as necessary for the purposes outlined in this Policy or as required by law.</p>

				<p class="mb-0"><strong>International Data Transfers:</strong> By using ATH.live, you acknowledge that your data may be transferred to servers located in various countries. We ensure appropriate safeguards are in place when data crosses international borders.</p>
			</section>

			<!-- Section 5 -->
			<section class="mb-5">
				<h2 class="h2 mb-4">5. Your Rights</h2>
				<p class="mb-3">Depending on your jurisdiction (GDPR, CCPA, or similar regulations), you may have the right to:</p>

				<div class="card border-0 bg-light p-4 mb-3">
					<h3 class="h5 mb-3">Access Your Data</h3>
					<p class="mb-0">Request a copy of personal information we hold about you</p>
				</div>

				<div class="card border-0 bg-light p-4 mb-3">
					<h3 class="h5 mb-3">Correct or Update Information</h3>
					<p class="mb-0">Update inaccurate or incomplete data</p>
				</div>

				<div class="card border-0 bg-light p-4 mb-3">
					<h3 class="h5 mb-3">Delete Your Data</h3>
					<p class="mb-0">Request deletion of your personal information (subject to legal retention requirements)</p>
				</div>

				<div class="card border-0 bg-light p-4 mb-3">
					<h3 class="h5 mb-3">Opt Out of Communications</h3>
					<p class="mb-0">Unsubscribe from newsletters and marketing emails at any time</p>
				</div>

				<div class="card border-0 bg-light p-4 mb-3">
					<h3 class="h5 mb-3">Restrict or Object to Processing</h3>
					<p class="mb-0">Limit how we use your data or object to specific processing activities</p>
				</div>

				<div class="card border-0 bg-light p-4">
					<h3 class="h5 mb-3">Data Portability</h3>
					<p class="mb-0">Receive your data in a structured, machine-readable format</p>
				</div>

				<p class="mt-4 mb-0">To exercise these rights, contact us at: 📧 <a href="mailto:info@ath.live">info@ath.live</a>. We will respond to all requests within 30 days, as required by applicable law.</p>
			</section>

			<!-- Section 6 -->
			<section class="mb-5">
				<h2 class="h2 mb-4">6. Data of Minors</h2>
				<p class="mb-3">ATH.live is not intended for children under 13 years of age.</p>
				<p class="mb-3">We do not knowingly collect personal information from minors. If we discover such data has been collected, we will delete it immediately upon notification.</p>
				<p class="mb-0">If you believe a minor has provided information to us, please contact us immediately.</p>
			</section>

			<!-- Section 7 -->
			<section class="mb-5">
				<h2 class="h2 mb-4">7. Changes to This Privacy Policy</h2>
				<p class="mb-3">We may update this Privacy Policy periodically to reflect:</p>
				<ul class="mb-4">
					<li>Changes in our data practices</li>
					<li>New features or services on our platform</li>
					<li>Legal or regulatory requirements</li>
				</ul>
				<p class="mb-3">The most current version will always be available at ath.live/privacy-policy with the "Effective Date" clearly displayed.</p>
				<p class="mb-0">We encourage you to review this page regularly, especially before providing any personal information.</p>
			</section>

			<!-- Section 8 -->
			<section class="mb-5">
				<h2 class="h2 mb-4" id="cryptoassets-disclaimer">8. Disclaimer Regarding Cryptoassets</h2>
				
				<div class="alert alert-warning p-4 mb-4" role="alert">
					<h3 class="alert-heading h5 mb-3">⚠️ Important Investment Risk Disclosure</h3>
					<p class="mb-0 fw-bold">CRYPTOASSETS ARE HIGHLY VOLATILE AND RISKY INVESTMENTS.</p>
				</div>

				<p class="mb-4">
					By accessing cryptocurrency news, market analysis, or educational content on ATH.live (including our news categories, events section, and related articles), you acknowledge and accept the following:
				</p>

				<div class="card border-0 bg-light p-4 mb-3">
					<h3 class="h5 mb-3">Market Volatility & Risk</h3>
					<ul class="mb-0">
						<li>Cryptoassets are subject to extreme price volatility and rapid, unpredictable value changes</li>
						<li>You may experience partial or total loss of invested capital</li>
						<li>Past performance does NOT guarantee or predict future results</li>
						<li>Market liquidity can disappear suddenly, preventing buying, selling, or converting assets</li>
					</ul>
				</div>

				<div class="card border-0 bg-light p-4 mb-3">
					<h3 class="h5 mb-3">No Financial Advice</h3>
					<ul class="mb-0">
						<li>ATH.live does NOT provide investment, tax, financial, or legal advice</li>
						<li>All content is for informational and educational purposes only</li>
						<li>We do not offer personalized investment recommendations</li>
						<li>Any information on our platform should NOT be considered trading recommendations</li>
					</ul>
				</div>

				<div class="card border-0 bg-light p-4 mb-3">
					<h3 class="h5 mb-3">Personal Responsibility</h3>
					<ul class="mb-0">
						<li>You are solely responsible for determining whether any cryptocurrency, blockchain project, or investment strategy is suitable for your circumstances</li>
						<li>Consider your financial situation, investment goals, knowledge level, and risk tolerance before making decisions</li>
						<li>Consult independent licensed professionals (financial advisors, tax experts, legal counsel) when necessary</li>
					</ul>
				</div>

				<div class="card border-0 bg-light p-4 mb-3">
					<h3 class="h5 mb-3">Regulatory Status</h3>
					<ul class="mb-0">
						<li>Cryptoassets are not legal tender in many jurisdictions</li>
						<li>They are not backed or guaranteed by any government</li>
						<li>Regulatory frameworks vary significantly across countries and are subject to change</li>
					</ul>
				</div>

				<div class="card border-0 bg-light p-4 mb-3">
					<h3 class="h5 mb-3">Due Diligence</h3>
					<ul class="mb-0">
						<li>Always conduct your own research (DYOR) before investing</li>
						<li>Verify all information from multiple independent sources</li>
						<li>Be cautious of projects with unrealistic promises or unclear fundamentals</li>
						<li>Understand the technology, team, and use case before investing</li>
					</ul>
				</div>

				<div class="card border-0 bg-light p-4">
					<h3 class="h5 mb-3">Platform Independence</h3>
					<ul class="mb-0">
						<li>ATH.live maintains editorial independence</li>
						<li>We do not endorse specific cryptocurrencies, exchanges, or investment products</li>
						<li>Inclusion in our news coverage or event listings does NOT constitute endorsement</li>
					</ul>
				</div>

				<p class="mt-4 mb-0">By continuing to use ATH.live, you confirm that you understand these risks and accept full responsibility for your investment decisions.</p>
			</section>

			<!-- Section 9 -->
			<section class="mb-5 pb-5">
				<h2 class="h2 mb-4">9. Contact & Inquiries</h2>
				<div class="card border-0 bg-light p-4">
					<p class="mb-2">For questions regarding this Privacy Policy, data protection practices, or cryptoasset disclaimers:</p>
					<p class="mb-2">
						📧 <strong>Email:</strong> <a href="mailto:info@ath.live">info@ath.live</a>
					</p>
					<p class="mb-2">
						🌐 <strong>Website:</strong> <a href="https://ath.live">https://ath.live</a>
					</p>
					<p class="mb-3">
						📄 <strong>More Information:</strong> <a href="{host}/about-us">About Us</a> | <a href="{host}/contact-us">Contact Us</a>
					</p>
					<p class="mb-0">We aim to respond to all privacy inquiries within 30 days.</p>
				</div>
			</section>

			<!-- Footer -->
			<section class="text-center border-top pt-4">
				<p class="text-muted mb-1">
					<strong>All Time High • Live</strong> Empowering the Web3 Generation Through Transparent Journalism
				</p>
				<p class="text-muted small mb-0">Last Updated: December 27, 2025</p>
			</section>
		</div>
	</div>

<style>
	.privacy-page {
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

	/* Content Section */
	.privacy-content {
		padding: 30px;
	}

	h2 {
		font-family: 'Playfair Display', serif;
		font-size: 28px;
		font-weight: 700;
		color: #000000;
		margin-top: 15px;
		margin-bottom: 20px;
		padding-top: 10px;
		border-top: 2px solid #f0f7f3;
	}

	h3,
	h4,
	h5 {
		font-family: 'Playfair Display', serif;
		font-weight: 600;
		color: #000000;
		margin-top: 15px;
		margin-bottom: 10px;
	}

	h3 {
		font-size: 18px;
	}

	h4 {
		font-size: 16px;
	}

	h5 {
		font-size: 15px;
	}

	p {
		font-family: 'Futura', sans-serif;
		font-size: 14px;
		line-height: 20px;
		color: #454545;
		margin-bottom: 12px;
	}

	ul, ol {
		font-family: 'Futura', sans-serif;
		font-size: 14px;
		line-height: 20px;
		color: #454545;
		margin-bottom: 15px;
		padding-left: 25px;
	}

	li {
		margin-bottom: 8px;
	}

	a {
		color: #1ca167;
		text-decoration: none;
		font-weight: 600;
	}

	a:hover {
		text-decoration: underline;
	}

	.card {
		padding: 20px;
		background: #f0f7f3;
		border-radius: 10px;
		border-left: 5px solid #1ca167;
		margin-bottom: 15px;
		transition: all 0.3s ease;
	}

	.card:hover {
		box-shadow: 0 4px 12px rgba(28, 161, 103, 0.1);
	}

	.alert {
		padding: 15px 20px;
		border-radius: 10px;
		border-left: 5px solid #ffc107;
		background: #fff3cd;
		margin-bottom: 20px;
	}

	.alert-heading {
		font-family: 'Playfair Display', serif;
		font-weight: 700;
		color: #856404;
		margin-bottom: 10px;
	}

	.section-divider {
		border-bottom: 2px solid #f0f7f3;
		margin: 30px 0;
	}

	/* Responsive */
	@media (max-width: 768px) {
		.hero-section {
			flex-direction: column;
			gap: 20px;
			padding: 20px;
			margin-bottom: 30px;
		}

		.privacy-content {
			padding: 20px;
		}

		.hero-title {
			font-size: 28px;
			line-height: 36px;
		}

		h2 {
			font-size: 22px;
		}

		h3 {
			font-size: 16px;
		}
	}

	@media (max-width: 480px) {
		.hero-section,
		.privacy-content {
			padding: 15px;
		}

		.hero-title {
			font-size: 24px;
			line-height: 32px;
		}

		h2 {
			font-size: 20px;
		}

		p, ul, ol {
			font-size: 13px;
			line-height: 18px;
		}
	}
</style>
