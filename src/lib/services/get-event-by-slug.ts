import { prepareEnvironment } from "./helpers/prepare-environment";
import type { IEvent, IFetchParams } from '~lib/types';

export interface IGetEventBySlugReturn {
	result: {
		data: IEvent[];
	}
}

export const getEventBySlug: (p: IFetchParams) => Promise<IGetEventBySlugReturn> =
	async ({ fetch, params }) => {

		const { apiHost, requestOptions } = prepareEnvironment();

		let url = `${apiHost}/api/events`;
		url += `?filters[slug][0]=${params.eventId}`;
		url += '&populate[0]=tags';
		url += '&populate[1]=category';
		url += '&populate[3]=cover_picture';

		const res = await fetch(url, requestOptions);
		const result = await res.json();

		return { result };
	}
