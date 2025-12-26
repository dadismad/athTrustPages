import { prepareEnvironment } from "./helpers/prepare-environment";
import type { ICategoryResponse, IFetchParams } from '~lib/types';
import { SHOW_ARTICLES_IN_CATEGORIES_FOR_LAST_DAYS } from '~lib/const';

export interface IGetAllCategoriesReturn {
	result: ICategoryResponse;
}

export const getCategoriesPreview: (p: IFetchParams) => Promise<IGetAllCategoriesReturn> =
	async ({ fetch }) => {
		const { apiHost, requestOptions } = prepareEnvironment();
		let result;

		const fromDate = new Date();
		fromDate.setDate(fromDate.getDate() - SHOW_ARTICLES_IN_CATEGORIES_FOR_LAST_DAYS);
		const fromDateISO = fromDate.toISOString().split('T')[0];

		let url = `${apiHost}`;
		    url += `/api/categories`;
				url += `?populate[articles][filters][createdAt][$gte]=${fromDateISO}`;
				url += `&populate[articles][fields]=title,description,slug`;
				url += `&populate[articles][populate]=cover_picture`;

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
