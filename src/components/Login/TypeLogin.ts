import { TypeOrderData } from '../../redux/ordersSlice/TypeOrdersSlice';

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

export type TypeOrdersData = TypeOrderData;
