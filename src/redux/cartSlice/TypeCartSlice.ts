import { TypeApi } from '../../api/TypeApi';

export type TypeCartItems = Omit<TypeApi, 'sizes'> & { sizes: number };

export type TypeCartSlice = {
	cartItems: TypeCartItems[];
	size: number;
};
