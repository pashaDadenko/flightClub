import { FC } from 'react';
import { api } from '../api/api';

import { Header } from '../components/Header/Header';
import { CreateAccount } from '../components/CreateAccount/CreateAccount';
import { Footer } from '../components/Footer/Footer';

export const CreateAccountPage: FC = () => {
	api();
	window.scrollTo(0, 0);

	return (
		<>
			<Header />
			<CreateAccount />
			<Footer />
		</>
	);
};
