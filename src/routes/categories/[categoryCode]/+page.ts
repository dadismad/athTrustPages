import type { Load } from '@sveltejs/kit';
import { getCategoryArticles } from '~lib/services';

export const load: Load = async ({ fetch, params }) => {

	console.log(params.categoryCode);

	const { result } = await getCategoryArticles({ fetch, params });
	return { result }

}
