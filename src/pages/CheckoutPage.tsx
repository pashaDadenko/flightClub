import { FC } from 'react';
import { api } from '../api/api';

import { Checkout } from '../components/Checkout/Checkout';
import { HeaderCheckout } from '../components/HeaderCheckout/HeaderCheckout';

export const CheckoutPage: FC = () => {
	api();
	window.scrollTo(0, 0);

	return (
		<>
			<HeaderCheckout />
			<Checkout />
		</>
	);
};
