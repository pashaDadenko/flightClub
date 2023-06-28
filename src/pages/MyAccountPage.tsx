import { FC } from 'react';

import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';

export const MyAccountPage: FC = () => {
	window.scrollTo(0, 0);

	return (
		<>
			<Header />
			<Footer />
		</>
	);
};
