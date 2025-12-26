import type { IBasicEntity } from './basic';
import type { ILocationEntity, IPictureEntity, ICategoryEntity, ITagEntity, IMeta } from '~lib/types';

export type IArticleLayout = 'default' | 'interview1' | null | undefined;

export interface ISocialLinks {
	id: number;
	social_name: string;
	social_link: string;
}

export interface IQuote {
	id: number;
	quote_author?: string;
	quote_text: string;
}

export interface IArticle extends IBasicEntity {

	title: string;
	text: string;
	description: string;
	layout: IArticleLayout;
	tags?: ITagEntity[];
	slug: string;
	cover_picture: IPictureEntity;
	category: ICategoryEntity;

	date?: string;
	time?: string;
	locations?: ILocationEntity[];

	quote?: IQuote[];
	socials: ISocialLinks[];

}

// server response
export interface IArticleResponse {
	data: IArticle[];
	meta: IMeta;
}

// return from service
export interface IGetArticlesReturn {
	result: IArticleResponse;
}
