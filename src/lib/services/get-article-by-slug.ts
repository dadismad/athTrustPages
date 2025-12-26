import { prepareEnvironment } from "./helpers/prepare-environment";
import type { IArticle, IFetchParams } from '~lib/types';

export interface IGetArticleBySlugReturn {
	result: {
		data: IArticle[];
	}
}

export const getArticleBySlug: (p: IFetchParams) => Promise<IGetArticleBySlugReturn> =
	async ({ fetch, params }) => {

		const { apiHost, requestOptions } = prepareEnvironment();

		let url = `${apiHost}/api/articles`;
		url += `?filters[slug][0]=${params.articleId}`;
		url += '&populate[0]=tags';
		url += '&populate[1]=category';
		url += '&populate[3]=cover_picture';

		const res = await fetch(url, requestOptions);
		const result = await res.json();

		return { result };
	}
