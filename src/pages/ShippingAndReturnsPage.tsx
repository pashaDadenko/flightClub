import { FC } from 'react';
import { Api } from '../api/Api';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { ShippingAndReturns } from '../components/ShippingAndReturns/ShippingAndReturns';

export const ShippingAndReturnsPage: FC = () => {
	Api();
	window.scrollTo(0, 0);

	return (
		<>
			<Header />
			<ShippingAndReturns />
			<Footer />
		</>
	);
};
