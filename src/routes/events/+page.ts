import { type Load } from '@sveltejs/kit';
import { getUpcomingEvents } from '~lib/services';
import { DEFAULT_PAGE_SIZE } from '~lib/const';

export const load: Load = async ({ fetch, params }) => {
	const events = await getUpcomingEvents({ fetch, params: { ...params, pagination: { page: 1, pageSize: DEFAULT_PAGE_SIZE } } });
	return { events }
}
