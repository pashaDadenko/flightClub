import { TypeShippingSlice } from '../../redux/shippingSlice/TypeShippingSlice';

export type TypeShipping = Omit<TypeShippingSlice, 'standardShipping'>;
