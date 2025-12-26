import type { IBasicEntity } from '~lib/types';

export interface IPictureFormat {
	ext: string;
	url: string;
	hash: string;
	mime: string;
	name: string;
	path?: string;
	size: number;
	width: number;
	height: number;
	sizeInBytes: number;
}

export interface IPictureEntity extends IBasicEntity {
	name: string;
	alternativeText?: string;
	caption?: string;
	width: number;
	height: number;

	formats: {
		large?: IPictureFormat;
		medium?: IPictureFormat;
		small: IPictureFormat;
		thumbnail: IPictureFormat;
	}

	hash: string;
	ext: string;
	mime: string;

	size: number;
	url: string;
	previewUrl?: string;
	provider: string;
	provider_metadata?: string;
}
