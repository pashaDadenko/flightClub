export type TypeLogin = {
	email: string;
	password: string;
};

export type TypeUserData = {
	fullNameReg?: null | string;
	name: null | string;
	streetAddress: null | string;
	apartment: null | string;
	city: null | string;
	postalCode: null | number;
	telephone: null | number;
};

export type TypeSneakers = {
	image: string;
	sizes: number;
	title: string;
};

export type TypeOrdersData = {
	userId: null | string;
	numberOrder: null | number;
	orderTotalPrice: null | number;
	sneakers: TypeSneakers[];
};
