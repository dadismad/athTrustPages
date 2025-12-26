import type { IBasicEntity, IArticle, IMeta } from '~lib/types';

export interface ITagEntity extends IBasicEntity {
	tag: string;
	articles?: IArticle[];
}

export interface ITagResponse {
	data: ITagEntity[];
	meta: IMeta;
}
