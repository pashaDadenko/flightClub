import { FC } from 'react';
import { api } from '../api/api';
import { queryString } from '../hooks/queryString';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { TitleBrand } from '../components/TitleBrand/TitleBrand';
import { AllSneakers } from '../components/AllSneakers/AllSneakers';

export const NikeDunkPage: FC = () => {
	api();
	queryString();
	window.scrollTo(0, 0);

	return (
		<>
			<Header />
			<TitleBrand />
			<AllSneakers />
			<Footer />
		</>
	);
};
