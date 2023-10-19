import { FC } from 'react';
import { Api } from '../api/Api';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { NotFound } from '../components/NotFound/NotFound';
import { AllSneakersBlock } from '../components/AllSneakersBlock/AllSneakersBlock';

export const ErrorPage: FC = () => {
	Api();

	window.scrollTo(0, 0);

	return (
		<>
			<Header />
			<NotFound />
			<AllSneakersBlock />
			<Footer />
		</>
	);
};
