import { FC } from 'react';
import { api } from '../api/api';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { Login } from '../components/Login/Login';

export const LoginPage: FC = () => {
	api();
	window.scrollTo(0, 0);

	return (
		<>
			<Header />
			<Login />
			<Footer />
		</>
	);
};
