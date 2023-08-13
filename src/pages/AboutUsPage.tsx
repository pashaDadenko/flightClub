import { FC } from 'react';
import { api } from '../api/api';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { AboutUs } from '../components/AboutUs/AboutUs';

export const AboutUsPage: FC = () => {
	api();
	window.scrollTo(0, 0);

	return (
		<>
			<Header />
			<AboutUs />
			<Footer />
		</>
	);
};
