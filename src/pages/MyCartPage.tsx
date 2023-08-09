import { FC } from 'react';
import { Api } from '../api/Api';

import { Header } from '../components/Header/Header';
import { MyCart } from '../components/MyCart/MyCart';
import { Footer } from '../components/Footer/Footer';

export const MyCartPage: FC = () => {
	Api();
	window.scrollTo(0, 0);

	return (
		<>
			<Header />
			<MyCart />
			<Footer />
		</>
	);
};
