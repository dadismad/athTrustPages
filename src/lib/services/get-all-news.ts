import { prepareEnvironment } from "./helpers/prepare-environment";
import type { IFetchParams, IGetArticlesReturn } from '~lib/types';
import { prepareUrl } from '~lib/services/helpers/prepare-url';

export const getAllNews: (p: IFetchParams) => Promise<IGetArticlesReturn> =
	async ({ fetch, params }) => {

		const { apiHost, requestOptions } = prepareEnvironment();

		let result;

		let initialQuery = '';
		initialQuery += '?sort[0]=createdAt:desc';
		initialQuery += '&filters[$and][0][$or][0][hidden][$null]=true';
		initialQuery += '&filters[$and][0][$or][1][hidden][$eq]=false';
		initialQuery += '&populate[0]=tags';
		initialQuery += '&populate[1]=category';
		initialQuery += '&populate[2]=cover_picture';
		initialQuery += '&populate[3]=locations';
		initialQuery += '&populate[4]=SEO.MetaTag';
		initialQuery += '&fields=title,slug,description';

		const url = prepareUrl({
			apiHost,
			basicUrl: '/api/articles',
			initialQuery,
			pageSize: params.pagination?.pageSize,
			page: params.pagination?.page
		});

		console.log("URL:", url);

		try {
			const res = await fetch(url, requestOptions);
			// console.log("RES:");
			// console.log(res);
			result = await res.json();
			// console.log("RESULT:");
			// console.log(result);
		} catch(err) {
			console.log(err);
		}

		return {
			result
		};
	}
