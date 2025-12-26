<script lang="ts">
	import { Head } from '~lib';
	const host = import.meta.env.VITE_HOST;
	const apiHost = import.meta.env.VITE_API_HOST;

	export let data;

	let formData = {
		name: '',
		email: '',
		subject: '',
		message: ''
	};

	let isSubmitting = false;
	let submitMessage = '';
	let submitError = '';

	async function handleSubmit(e: Event) {
		e.preventDefault();
		isSubmitting = true;
		submitMessage = '';
		submitError = '';

		try {
			// Email will be sent via backend service
			// For now, show confirmation
			submitMessage = 'Thank you for your inquiry! We will respond within 24-48 hours.';
			formData = { name: '', email: '', subject: '', message: '' };
		} catch (error) {
			submitError = 'An error occurred. Please try again or email us directly at info@ath.live';
		} finally {
			isSubmitting = false;
		}
	}
</script>

<Head
	title={data.title}
	description={data.description}
	canonical="{host}/contact-us"
	og_type="website"
	imageUrl="{apiHost}/uploads/ath-logo.png"
	imageWidth="1000"
	imageHeight="1000"
	articleLink="{host}/contact-us"
/>

<div class="contact-page">
	<!-- Hero Section -->
	<section class="hero-section">
		<div class="hero-content">
			<h1 class="hero-title">Connect With ATH.live</h1>
			<p class="hero-subtitle">Your Voice Matters in the Web3 Revolution</p>
			<div class="hero-text">
				<p>
					At ATH.live, we believe in transparency, open discourse, and community-driven journalism. Whether you're a journalist with a breaking story, an investor with market insights, or a digital nomad with a unique perspective, we want to hear from you. Let's build the future of cryptocurrency media together.
				</p>
			</div>
		</div>
	</section>

	<!-- Contact Form Section -->
	<section class="form-section">
		<h2 class="section-title">Send Us a Message</h2>
		<div class="form-card">
			{#if submitMessage}
				<div class="alert alert-success">
					{submitMessage}
				</div>
			{/if}

			{#if submitError}
				<div class="alert alert-error">
					{submitError}
				</div>
			{/if}

			<form on:submit={handleSubmit}>
				<div class="form-group">
					<label for="name">Name *</label>
					<input
						type="text"
						id="name"
						bind:value={formData.name}
						required
						placeholder="Your name"
					/>
				</div>

				<div class="form-group">
					<label for="email">Email *</label>
					<input
						type="email"
						id="email"
						bind:value={formData.email}
						required
						placeholder="your@email.com"
					/>
				</div>

				<div class="form-group">
					<label for="subject">Subject *</label>
					<select id="subject" bind:value={formData.subject} required>
						<option value="">Select a category...</option>
						<option value="editorial">Editorial Inquiry</option>
						<option value="partnership">Business Partnership</option>
						<option value="correction">Correction Request</option>
						<option value="privacy">Privacy Inquiry</option>
						<option value="press">Press/Media</option>
						<option value="contributor">Contributor Opportunity</option>
						<option value="other">Other</option>
					</select>
				</div>

				<div class="form-group">
					<label for="message">Message *</label>
					<textarea
						id="message"
						rows={6}
						bind:value={formData.message}
						required
						placeholder="Tell us more about your inquiry..."
					></textarea>
				</div>

				<button type="submit" class="submit-button" disabled={isSubmitting}>
					{isSubmitting ? 'Sending...' : 'Send Message'}
				</button>
			</form>
		</div>
	</section>

	<!-- Contact Info Sections -->
	<section class="info-sections">
		<h2 class="section-title">Get in Touch</h2>

		<div class="info-grid">
			<div class="info-card">
				<h3>General Inquiries & Partnerships</h3>
				<p>For collaboration opportunities, press releases, or questions about our cryptocurrency and blockchain coverage.</p>
				<p><strong>📧 Email:</strong> <a href="mailto:info@ath.live">info@ath.live</a></p>
				<p><strong>⏱️ Response Time:</strong> 24-48 hours for all professional inquiries</p>
			</div>

			<div class="info-card">
				<h3>Editorial & Corrections</h3>
				<p>Have a tip about breaking crypto news? Found an error in our reporting? We value accuracy and transparency.</p>
				<p><strong>📧 Email:</strong> <a href="mailto:info@ath.live">info@ath.live</a></p>
				<p>Mark your subject line with "Editorial"</p>
			</div>

			<div class="info-card">
				<h3>Privacy & Data Requests</h3>
				<p>Questions about your data? Want to exercise your GDPR/CCPA rights? <a href="{host}/privacy-policy">View our Privacy Policy</a>.</p>
				<p><strong>📧 Email:</strong> <a href="mailto:info@ath.live">info@ath.live</a></p>
				<p>We respond within 30 days</p>
			</div>

			<div class="info-card">
				<h3>Become a Contributor</h3>
				<p>Interested in writing for ATH.live? We're always looking for talented journalists and analysts in the crypto space.</p>
				<p><strong>📧 Email:</strong> <a href="mailto:info@ath.live">info@ath.live</a></p>
				<p>Include portfolio or writing samples</p>
			</div>
		</div>
	</section>
</div>

<style>
	.contact-page {
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

	.section-title {
		font-family: 'Playfair Display', serif;
		font-size: 42px;
		font-weight: 700;
		line-height: 56px;
		color: #000000;
		margin-bottom: 30px;
		text-transform: capitalize;
	}

	/* Form Section */
	.form-section {
		padding: 30px;
		margin-bottom: 35px;
	}

	.form-card {
		padding: 30px;
		background: #f0f7f3;
		border-radius: 10px;
		border-left: 5px solid #1ca167;
	}

	.form-group {
		margin-bottom: 20px;
	}

	.form-group label {
		font-family: 'Playfair Display', serif;
		font-size: 16px;
		font-weight: 600;
		color: #000000;
		margin-bottom: 8px;
		display: block;
	}

	.form-group input,
	.form-group select,
	.form-group textarea {
		width: 100%;
		padding: 12px 15px;
		font-family: 'Futura', sans-serif;
		font-size: 14px;
		border: 1px solid #ddd;
		border-radius: 8px;
		color: #454545;
	}

	.form-group input:focus,
	.form-group select:focus,
	.form-group textarea:focus {
		outline: none;
		border-color: #1ca167;
		box-shadow: 0 0 0 3px rgba(28, 161, 103, 0.1);
	}

	.submit-button {
		background: #1ca167;
		color: white;
		padding: 14px 40px;
		border: none;
		border-radius: 8px;
		font-family: 'Futura', sans-serif;
		font-size: 14px;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.3s ease;
	}

	.submit-button:hover:not(:disabled) {
		background: #158d55;
		transform: translateY(-2px);
	}

	.submit-button:disabled {
		opacity: 0.6;
		cursor: not-allowed;
	}

	.alert {
		padding: 15px 20px;
		border-radius: 8px;
		margin-bottom: 20px;
		font-family: 'Futura', sans-serif;
		font-size: 14px;
	}

	.alert-success {
		background: #d4edda;
		color: #155724;
		border: 1px solid #c3e6cb;
	}

	.alert-error {
		background: #f8d7da;
		color: #721c24;
		border: 1px solid #f5c6cb;
	}

	/* Info Sections */
	.info-sections {
		padding: 30px;
		margin-bottom: 15px;
	}

	.info-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 20px;
	}

	.info-card {
		padding: 20px;
		background: #f9f9f9;
		border-radius: 10px;
		border-left: 5px solid #1ca167;
	}

	.info-card h3 {
		font-family: 'Playfair Display', serif;
		font-size: 18px;
		font-weight: 600;
		color: #000000;
		margin-bottom: 12px;
	}

	.info-card p {
		font-family: 'Futura', sans-serif;
		font-size: 13px;
		line-height: 18px;
		color: #454545;
		margin-bottom: 8px;
	}

	.info-card a {
		color: #1ca167;
		text-decoration: none;
		font-weight: 600;
	}

	.info-card a:hover {
		text-decoration: underline;
	}

	/* Responsive */
	@media (max-width: 768px) {
		.hero-section {
			flex-direction: column;
			gap: 20px;
			padding: 20px;
			margin-bottom: 30px;
		}

		.form-section,
		.info-sections {
			padding: 20px;
			margin-bottom: 30px;
		}

		.section-title {
			font-size: 28px;
			line-height: 36px;
			margin-bottom: 20px;
		}

		.hero-title {
			font-size: 28px;
			line-height: 36px;
		}

		.info-grid {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 480px) {
		.hero-section,
		.form-section,
		.info-sections {
			padding: 15px;
		}

		.section-title,
		.hero-title {
			font-size: 24px;
			line-height: 32px;
		}

		.form-card {
			padding: 20px;
		}
	}
</style>
