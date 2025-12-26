import type { Load } from '@sveltejs/kit';

export const load: Load = async () => {
	return {
		title: 'Privacy Policy & Disclaimer - ATH.live',
		description: 'Read our Privacy Policy and Cryptoasset Risk Disclaimer. We value your privacy and transparency.',
		canonical: 'https://ath.live/privacy-policy'
	};
};
