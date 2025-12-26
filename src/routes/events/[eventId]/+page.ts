import type { PageLoad } from './$types';
import type { IGetEventsReturn } from '~lib/types';
import { getEventBySlug, type IGetEventBySlugReturn, getUpcomingEvents } from '~lib/services';

export const load: PageLoad = async ({ fetch, params }) => {

	const events: IGetEventBySlugReturn = await getEventBySlug({ fetch, params });
	const upcomingEvents: IGetEventsReturn = await getUpcomingEvents({ fetch, params: { pagination: { page: 1, pageSize: 12 } } })

	return {
		article: {
			currentEvent: events.result.data[0],
		},
		upcomingEvents
	};

}
