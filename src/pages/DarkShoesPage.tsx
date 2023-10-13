import { FC } from 'react';
import { Api } from '../api/Api';
import { queryString } from '../hooks/queryString';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { TitleBrand } from '../components/TitleBrand/TitleBrand';
import { AllSneakers } from '../components/AllSneakers/AllSneakers';

export const DarkShoesPage: FC = () => {
	Api();
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
