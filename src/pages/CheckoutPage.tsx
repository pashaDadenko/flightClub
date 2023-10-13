import { FC } from 'react';
import { Api } from '../api/Api';
import { Checkout } from '../components/Checkout/Checkout';
import { HeaderCheckout } from '../components/HeaderCheckout/HeaderCheckout';

export const CheckoutPage: FC = () => {
	Api();
	window.scrollTo(0, 0);

	return (
		<>
			<HeaderCheckout />
			<Checkout />
		</>
	);
};
