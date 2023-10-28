import { FC } from 'react';
import { Checkout } from '../components/Checkout/Checkout';
import { HeaderCheckout } from '../components/HeaderCheckout/HeaderCheckout';

export const CheckoutPage: FC = () => {
	window.scrollTo(0, 0);

	return (
		<>
			<HeaderCheckout />
			<Checkout />
		</>
	);
};
