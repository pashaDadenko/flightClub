import { FC } from 'react';
import { api } from '../api/api';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { SellSneakers } from '../components/SellSneakers/SellSneakers';

export const SellSneakersPage: FC = () => {
	api();
	window.scrollTo(0, 0);

	return (
		<>
			<Header />
			<SellSneakers />
			<Footer />
		</>
	);
};
