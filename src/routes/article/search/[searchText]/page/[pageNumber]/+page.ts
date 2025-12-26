import type { PageLoad } from './$types';
import { searchArticles } from '~lib/services';
import { redirect } from '@sveltejs/kit';
import { DEFAULT_PAGE_SIZE } from '~lib';

export const load: PageLoad = async ({ fetch, params }) => {

	const host: string = import.meta.env.VITE_HOST;
	const page: string = params.pageNumber;
	const searchText = params.searchText || '';
	const defaultPath = `${host}/article/search/${encodeURIComponent(searchText)}`;
	let currentPage = 1;

	if (!page) {
		redirect(307, `${defaultPath}`);
	} else {

		if (!isNaN(Number(page)) && page.trim() !== "") {
			currentPage = page ? parseInt(page, 10) : 1;

			if (currentPage === 1) {
				throw redirect(307, `${defaultPath}`);
			}

		} else {
			throw redirect(307, `${defaultPath}`);
		}
	}

	const result = await searchArticles({ fetch, params: { searchText, pagination: { page: currentPage, pageSize: DEFAULT_PAGE_SIZE } } });

	const pageCount = result?.result?.meta?.pagination?.pageCount || 1;

	if (currentPage > pageCount) {
		throw redirect(307, `${defaultPath}`);
	}

	return {
		searchText,
		searchResults: result.result
	};

	// return getArticlesByCategory({ fetch, params: { ...params, pagination: { page: currentPage, pageSize: DEFAULT_PAGE_SIZE } } });

};
