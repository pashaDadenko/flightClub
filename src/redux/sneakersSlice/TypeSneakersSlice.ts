import { TypeApi } from '../../api/TypeApi';

export type TypeSneakersSlice = {
	allSneakers: TypeApi[];

	ImageCarousel: string[];
	brand: string;
	title: string;

	currentSort: string;
};
