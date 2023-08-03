import { FC } from 'react';

import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { MyAccount } from '../components/MyAccount/MyAccount';

export const MyAccountPage: FC = () => {
	window.scrollTo(0, 0);

	return (
		<>
			<Header />
			<MyAccount />
			<Footer />
		</>
	);
};
