import type { Load } from '@sveltejs/kit';

export const load: Load = async () => {
	return {
		title: 'Contact ATH.live | Editorial & Business Inquiries',
		description: 'Get in touch with the ATH.live team. Reach out for collaborations, editorial inquiries, or press matters.',
		canonical: 'https://ath.live/contact-us'
	};
};
