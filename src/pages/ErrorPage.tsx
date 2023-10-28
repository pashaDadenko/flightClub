import { FC } from 'react';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { NotFound } from '../components/NotFound/NotFound';
import { AllSneakersBlock } from '../components/AllSneakersBlock/AllSneakersBlock';

export const ErrorPage: FC = () => {
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
