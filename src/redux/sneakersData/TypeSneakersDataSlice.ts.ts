import { TypeApi } from '../../api/TypeApi';

export type TypeSneakersDataSlice = {
	allSneakers: TypeApi[];
	offWhiteSneakers: TypeApi[];
	airJordanSneakers: TypeApi[];
	randomSneakers: TypeApi[];
	topSellersSneakers: TypeApi[];

	recommendedSneakers: TypeApi[];
	ImageCarousel: string[];
	brand: string;

	currentSort: string;
};
