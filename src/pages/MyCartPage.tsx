import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { Header } from '../components/Header/Header';
import { MyCart } from '../components/MyCart/MyCart';
import { Footer } from '../components/Footer/Footer';
import { NotFound } from '../components/NotFound/NotFound';
import { RecommendedBlock } from '../components/RecommendedBlock/RecommendedBlock';

export const MyCartPage: FC = () => {
	const cartItems = useSelector((state: RootState) => state.cartSlice.cartItems);

	window.scrollTo(0, 0);

	return (
		<>
			<Header />
			{cartItems.length > 0 ? <MyCart /> : <NotFound />}
			{cartItems.length > 0 && <RecommendedBlock />}
			<Footer />
		</>
	);
};
