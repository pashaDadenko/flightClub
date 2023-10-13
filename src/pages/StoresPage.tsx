import { FC } from 'react';
import { Api } from '../api/Api';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { Stores } from '../components/Stores/Stores';

export const StoresPage: FC = () => {
	Api();
	window.scrollTo(0, 0);

	return (
		<>
			<Header />
			<Stores />
			<Footer />
		</>
	);
};
