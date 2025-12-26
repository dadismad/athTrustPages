import type { PageLoad } from './$types';
import { searchArticles } from '~lib/services';
import { DEFAULT_PAGE_SIZE } from '~lib';

export const load: PageLoad = async ({ fetch, params }) => {
	const searchText = params.searchText;
	const result = await searchArticles({ fetch, params: { searchText, pagination: { page: 1, pageSize: DEFAULT_PAGE_SIZE } } });

	return {
		searchText,
		searchResults: result.result
	};
};
