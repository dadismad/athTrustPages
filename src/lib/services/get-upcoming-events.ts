import { prepareEnvironment } from "./helpers/prepare-environment";
import type { IFetchParams, IGetEventsReturn } from '~lib/types';
import { prepareUrl } from '~lib/services/helpers/prepare-url';

// TODO: typing for the Event entity
export const getUpcomingEvents: (p: IFetchParams) => Promise<IGetEventsReturn> =
	async ({ fetch, params }) => {

		const { apiHost, requestOptions } = prepareEnvironment();

		let result;

		const d = new Date();
		const todayDate = d.getFullYear()
			+ '-'
			+ ((d.getMonth() + 1) < 10 ? `0${d.getMonth() + 1}` : d.getMonth() + 1 )
			+ '-'
			+ (d.getDate() < 10 ? `0${d.getDate()}` : d.getDate() );

		let initialQuery = '';
		initialQuery += '?populate[0]=location';
		initialQuery += `&filters[date][$gte]=${todayDate}`;
		initialQuery += '&sort[0]=date:asc';
		initialQuery += '&populate[1]=cover_picture';
		initialQuery += '&populate[2]=category';

		const url = prepareUrl({
			apiHost,
			basicUrl: '/api/events',
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
