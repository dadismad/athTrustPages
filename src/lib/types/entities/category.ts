import type { IArticle, IEntityError, IMeta } from '~lib/types';
import type { IBasicEntity } from './basic';

export interface ICategoryEntity extends IBasicEntity {
	category_name: string;
	category_code: string;
	articles?: IArticle[];
}

export interface ICategoryResponse {
	data: ICategoryEntity[];
	meta: IMeta;
	error?: IEntityError;
}
