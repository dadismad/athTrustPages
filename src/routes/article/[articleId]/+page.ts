import type { PageLoad } from './$types';
import { getArticleBySlug, type IGetArticleBySlugReturn, getAllNews } from '~lib/services';

export const load: PageLoad = async ({ fetch, params }) => {

	const articles: IGetArticleBySlugReturn = await getArticleBySlug({ fetch, params });
	const recentArticles = await getAllNews({ fetch, params: { pagination: { page: 1, pageSize: 12 } } })

	return {
		article: {
			currentArticle: articles.result.data[0],
		},
		recentArticles
	};

}
