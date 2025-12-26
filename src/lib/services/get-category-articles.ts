import { prepareEnvironment } from "./helpers/prepare-environment";
import type { IFetchParams, IGetArticlesReturn } from '~lib/types';
import { prepareUrl } from '~lib/services/helpers/prepare-url';

export const getCategoryArticles: (p: IFetchParams) => Promise<IGetArticlesReturn> =
	async ({ fetch, params }) => {

		const { apiHost, requestOptions } = prepareEnvironment();

		let result;

		let initialQuery = '';
		initialQuery += '?sort[0]=createdAt:desc';
		initialQuery += '&filters[$and][0][$or][0][hidden][$null]=true';
		initialQuery += '&filters[$and][0][$or][1][hidden][$eq]=false';
		initialQuery += `&filters[$and][1][category][category_code]=${params.categoryCode}`;
		initialQuery += '&populate[0]=tags';
		initialQuery += '&populate[1]=category';
		initialQuery += '&populate[2]=cover_picture';
		initialQuery += '&populate[3]=locations';
		initialQuery += '&fields=title,slug,description';

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
		}

		return {
			result
		};
	}
