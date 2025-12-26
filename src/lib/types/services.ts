import type { IPagination } from './meta';

export interface IFetchParams {
	fetch: (input: (RequestInfo | URL), init?: RequestInit) => Promise<Response>;
	params: {
		articleId?: string;
		eventId?: string;
		tagId?: string;
		feedId?: string;
		categoryId?: string;
		categoryCode?: string;
		pagination?: IPagination;
		searchText?: string;
	};
}
