import type { PageLoad } from './$types';
import { getAllNews } from '~lib/services';
import { DEFAULT_PAGE_SIZE } from '~lib/const';
import { redirect } from '@sveltejs/kit';

export const load: PageLoad = async ({ fetch, params }) => {

	const host = import.meta.env.VITE_HOST;
	const page = params.pageNumber;
	let currentPage = 1;

	if (page) {
		if (!isNaN(Number(page)) && page.trim() !== "") {
			currentPage = page ? parseInt(page, 10) : 1;
			if (currentPage === 1) {
				redirect(307, `${host}`);
			}
		} else {
			redirect(301, `${host}`);
		}
	}

	const articles = await getAllNews({ fetch, params: { ...params, pagination: { page: currentPage, pageSize: DEFAULT_PAGE_SIZE } } });

	const totalPages = articles.result.meta.pagination?.pageCount || 0;

	if (totalPages < currentPage) {
		redirect(301, `${host}`);
	}

	return articles.result;

}
