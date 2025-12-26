import type { Load } from '@sveltejs/kit';
import { getCategoriesPreview } from '~lib/services';

export const load: Load = async ({ fetch }) => {

	const categories = await getCategoriesPreview({ fetch, params: {} });
	return { categories }

}
