import { FC } from 'react';
import { Api } from '../api/Api';

import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { MyAccount } from '../components/MyAccount/MyAccount';

export const MyAccountPage: FC = () => {
	Api();
	window.scrollTo(0, 0);

	return (
		<>
			<Header />
			<MyAccount />
			<Footer />
		</>
	);
};
