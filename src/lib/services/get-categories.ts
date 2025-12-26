import { prepareEnvironment } from "./helpers/prepare-environment";
import type { ICategoryResponse, IFetchParams } from '~lib/types';

export interface IGetCategoriesReturn {
	result: ICategoryResponse;
}

export const getCategories: (p: IFetchParams) => Promise<IGetCategoriesReturn> =
	async ({ fetch }) => {
		const { apiHost, requestOptions } = prepareEnvironment();
		let result;

		let url = `${apiHost}`;
		url += `/api/categories`;

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
