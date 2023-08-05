import { TypeApi } from '../../api/TypeApi';

export type TypeFiltersValue = {
	valueBrand: string[];
	valueModel: string[];
	valueColor: string[];
};

export type TypeCardItems = {
	InfoProduct: string;
	article: string;
	brand: string;
	color: string;
	id: number;
	images: string[];
	model: string;
	price: number;
	rating: number;
	title: string;
	sizes: number;
};

export type TypeSneakersDataSlice = {
	sneakersData: TypeApi[];
	topSellersData: TypeApi[];
	offWhiteData: TypeApi[];
	airJordanData: TypeApi[];
	randomSneakers: TypeApi[];
	recommendedSneakers: TypeApi[];
	ImageCarousel: string[];
	brand: string;
	currentSort: string;
	filterValues: TypeFiltersValue;
	searchValue: string;
	cardItems: TypeCardItems[];
	size: number;
};
