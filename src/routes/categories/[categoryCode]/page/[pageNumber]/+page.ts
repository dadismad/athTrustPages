import { type Load, redirect } from '@sveltejs/kit';
import { getCategoryArticles } from '~lib/services';
import { DEFAULT_PAGE_SIZE } from '~lib/const';

export const load: Load = async ({ fetch, params }) => {

	console.log(params.categoryCode);

	const host = import.meta.env.VITE_HOST;
	const page = params.pageNumber;
	let currentPage = 1;

	if (page) {
		if (!isNaN(Number(page)) && page.trim() !== "") {
			currentPage = page ? parseInt(page, 10) : 1;
		} else {
			redirect(301, `${host}`);
		}
	}

	const { result } = await getCategoryArticles({ fetch, params: { ...params, pagination: { page: currentPage, pageSize: DEFAULT_PAGE_SIZE } } });
	return { result }

}
