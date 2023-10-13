import { FC } from 'react';
import { Api } from '../api/Api';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { CreateAccount } from '../components/CreateAccount/CreateAccount';

export const CreateAccountPage: FC = () => {
	Api();
	window.scrollTo(0, 0);

	return (
		<>
			<Header />
			<CreateAccount />
			<Footer />
		</>
	);
};
