import { type Load } from '@sveltejs/kit';
import { getAllNews } from '~lib/services';
import { DEFAULT_PAGE_SIZE } from '~lib/const';

export const load: Load = async ({ fetch, params }) => {
	const news = await getAllNews({ fetch, params: { ...params, pagination: { page: 1, pageSize: DEFAULT_PAGE_SIZE } } });
	return { news }
}
