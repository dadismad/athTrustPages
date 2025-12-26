export interface IBasicEntity {
	createdAt: string;
	updatedAt: string;
	publishedAt?: string;

	id: number;
	documentId: string;
	locale: ILocale;
}

export type ILocale = unknown;

export interface IEntityError {
	details: unknown;
	message: string;
	name: string;
	status: number;
}
