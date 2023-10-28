import { FC } from 'react';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { ForgotPassword } from '../components/ForgotPassword/ForgotPassword';

export const ForgotPasswordPage: FC = () => {
	window.scrollTo(0, 0);

	return (
		<>
			<Header />
			<ForgotPassword />
			<Footer />
		</>
	);
};
