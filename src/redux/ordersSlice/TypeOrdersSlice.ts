export type TypeSneakers = {
	image: string;
	sizes: number;
	title: string;
};

export type TypeOrdersSlice = {
	userId: null | string;
	numberOrder: null | number;
	orderTotalPrice: null | number;
	sneakers: TypeSneakers[];
};
