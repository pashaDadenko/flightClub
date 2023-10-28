import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { MyOrders } from '../components/MyOrders/MyOrders';
import { NotFound } from '../components/NotFound/NotFound';

export const MyOrdersPage: FC = () => {
	const ordersData = useSelector((state: RootState) => state.ordersSlice.ordersData);

	window.scrollTo(0, 0);

	return (
		<>
			<Header />
			{ordersData.length > 0 ? <MyOrders /> : <NotFound />}
			<Footer />
		</>
	);
};
