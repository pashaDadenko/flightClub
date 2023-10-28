import { FC } from 'react';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { CreateAccount } from '../components/CreateAccount/CreateAccount';

export const CreateAccountPage: FC = () => {
	window.scrollTo(0, 0);

	return (
		<>
			<Header />
			<CreateAccount />
			<Footer />
		</>
	);
};
