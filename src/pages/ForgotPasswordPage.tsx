import { FC } from 'react';
import { Api } from '../api/Api';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { ForgotPassword } from '../components/ForgotPassword/ForgotPassword';

export const ForgotPasswordPage: FC = () => {
	Api();
	window.scrollTo(0, 0);

	return (
		<>
			<Header />
			<ForgotPassword />
			<Footer />
		</>
	);
};
