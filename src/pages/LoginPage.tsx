import { FC } from 'react';
import { Api } from '../api/Api';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { Login } from '../components/Login/Login';

export const LoginPage: FC = () => {
	Api();
	window.scrollTo(0, 0);

	return (
		<>
			<Header />
			<Login />
			<Footer />
		</>
	);
};
