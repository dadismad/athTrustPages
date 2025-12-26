import type { Load } from '@sveltejs/kit';

export const load: Load = async () => {
	return {
		title: 'About ATH.live | Your Guide to the Future of Finance',
		description: 'Learn about ATH.live\'s mission to empower digital nomads and crypto leaders through explanatory journalism and Web3 education.',
		canonical: 'https://ath.live/about-us'
	};
};
