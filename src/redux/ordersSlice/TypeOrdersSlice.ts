export type TypeSneakers = {
	image: string;
	sizes: number;
	title: string;
};

export type TypeOrderData = {
	userId: null | string;
	name: null | string;
	email: null | string;
	telephone: null | number;
	numberOrder: null | number;
	sneakers: TypeSneakers[];
	city: null | string;
	streetAddress: null | string;
	apartment: null | string;
	postalCode: null | number;
	orderTotalPrice: null | number;
	orderDate: null | string;
};

export type TypeOrdersSlice = {
	ordersData: TypeOrderData[];
};
