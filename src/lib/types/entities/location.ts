import type { IBasicEntity, IArticle, IMeta } from '~lib/types';

export interface ILocationEntity extends IBasicEntity {
	location_link?: string;
	location_name: string;
	articles?: IArticle[];
}

export interface ILocationResponse {
	data: ILocationEntity[];
	meta: IMeta;
}
