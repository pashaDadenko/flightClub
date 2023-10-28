import { FC } from 'react';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { SellSneakers } from '../components/SellSneakers/SellSneakers';

export const SellSneakersPage: FC = () => {
	window.scrollTo(0, 0);

	return (
		<>
			<Header />
			<SellSneakers />
			<Footer />
		</>
	);
};
