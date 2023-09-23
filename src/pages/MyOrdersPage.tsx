import { FC } from 'react';
import { api } from '../api/api';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { MyOrders } from '../components/MyOrders/MyOrders';

export const MyOrdersPage: FC = () => {
	api();
	window.scrollTo(0, 0);

	return (
		<>
			<Header />
			<MyOrders />
			<Footer />
		</>
	);
};
