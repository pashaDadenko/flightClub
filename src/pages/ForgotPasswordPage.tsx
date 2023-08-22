import { FC } from 'react';
import { api } from '../api/api';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { ForgotPassword } from '../components/ForgotPassword/ForgotPassword';

export const ForgotPasswordPage: FC = () => {
	api();
	window.scrollTo(0, 0);

	return (
		<>
			<Header />
			<ForgotPassword />
			<Footer />
		</>
	);
};
