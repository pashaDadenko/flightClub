import { FC } from 'react';
import { Api } from '../api/Api';

import { Header } from '../components/Header/Header';
import { AllSneakers } from '../components/AllSneakers/AllSneakers';
import { Footer } from '../components/Footer/Footer';
import { TitleBrand } from '../components/TitleBrand/TitleBrand';

export const AllSneakersPage: FC = () => {
	Api();
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
