import type { IArticleResponse } from '~lib/types/entities';

export interface ISearchData {
	searchText?: string;
	searchResults: IArticleResponse;
}
