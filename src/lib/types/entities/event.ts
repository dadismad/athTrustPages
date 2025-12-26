import type {
	IArticleLayout,
	IBasicEntity,
	ICategoryEntity,
	ILocationEntity,
	IPictureEntity,
	IMeta, ITagEntity
} from '~lib/types';

export interface IEvent extends IBasicEntity {
	title: string;
	text: string;
	description: string;
	layout: IArticleLayout;
	slug: string;
	cover_picture: IPictureEntity[];
	category: ICategoryEntity;
	tags?: ITagEntity[];

	date: string;
	time?: string;
	locations?: ILocationEntity[];
}

// server response
export interface IEventResponse {
	data: IEvent[];
	meta: IMeta;
}

// return from service
export interface IGetEventsReturn {
	result: IEventResponse;
}
