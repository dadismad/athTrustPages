import { prepareEnvironment } from "~lib/services/helpers/prepare-environment";
import { prepareUrl } from '~lib/services/helpers/prepare-url';
import type { IArticle, IFetchParams, IMeta } from '~lib/types';

interface IGetArticlesReturn {
	result: {
		data: IArticle[];
		meta: IMeta;
	},
	status: number;
}

export const searchArticles: (p: IFetchParams) => Promise<IGetArticlesReturn> =
	async ({ fetch, params }) => {

		const { apiHost, requestOptions } = prepareEnvironment();
		const searchText = params?.searchText;

		let result;
		let status = 0;

		let initialQuery = '';
		initialQuery += '?sort[0]=createdAt:desc';
		initialQuery += `&filters[$or][0][title][$containsi]=${searchText}`;
		initialQuery += `&filters[$or][1][description][$containsi]=${searchText}`;
		initialQuery += `&filters[$or][2][text][$containsi]=${searchText}`;
		initialQuery += `&fields=title,description,text,slug,publishedAt`;

		const url = prepareUrl({
			apiHost,
			basicUrl: '/api/articles',
			initialQuery,
			pageSize: params.pagination?.pageSize,
			page: params.pagination?.page
		});

		try {
			const res = await fetch(url, requestOptions);
			result = await res.json();
		} catch(err) {
			console.log(err);
			status = 400;
		}

		return {
			result,
			status
		};
	}
