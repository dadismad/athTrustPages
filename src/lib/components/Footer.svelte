<script lang="ts">
	const host = import.meta.env.VITE_HOST;
</script>

<section class="contact-us">
	<h2><span style="color: white;">All</span> Time High <span style="color: white;">• Live</span></h2>
	<p>Have questions or want to collaborate? Reach us at: <a href="mailto:info@ath.live">info@ath.live</a></p>
	<div class="footer-links">
		<a href={`${host}/about-us`}>About Us</a>
		<a href={`${host}/contact-us`}>Contact</a>
		<a href={`${host}/privacy-policy`}>Privacy Policy</a>
	</div>
</section>

<style lang="scss">
  section.contact-us {
    padding: 1rem;
    background: var(--color-bg-inv-100);
    border-radius: var(--border-radius-panel);
    color: var(--color-text-inv-100);
    margin-bottom: 2rem;
    >h2 {
      color: var(--color-text-primary-100);
      text-transform: uppercase;
    }
		a, a:visited, a:link {
			color: var(--color-text-primary-100);
		}
  }

	.footer-links {
		display: flex;
		gap: 1.5rem;
		margin-top: 1rem;
		flex-wrap: wrap;
		a {
			font-size: 0.95rem;
			text-decoration: none;
			border-bottom: 1px solid transparent;
			transition: border-color 0.3s ease;
			&:hover {
				border-bottom: 1px solid var(--color-text-primary-100);
			}
		}
	}
</style>
