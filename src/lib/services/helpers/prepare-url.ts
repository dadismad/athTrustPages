import { DEFAULT_PAGE_SIZE } from '~lib/const';

export interface IPrepareUrlParams {
	apiHost: string;
	basicUrl: string;
	initialQuery?: string;
	pageSize?: number | undefined;
	page?: number | undefined;
}

export const prepareUrl: (props: IPrepareUrlParams) => string =
	({ apiHost, initialQuery, basicUrl, pageSize, page }) => {
		let url = `${apiHost}${basicUrl}`;
		url += `${initialQuery || '?'}`
		url += initialQuery ? '&' : ''
		url += pageSize ? `pagination[pageSize]=${pageSize}` : `pagination[pageSize]=${DEFAULT_PAGE_SIZE}`;
		url += page ? `&pagination[page]=${page}` : '';
		return url;
	}
