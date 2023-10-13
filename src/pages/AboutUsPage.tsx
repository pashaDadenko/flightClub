import { FC } from 'react';
import { Api } from '../api/Api';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { AboutUs } from '../components/AboutUs/AboutUs';

export const AboutUsPage: FC = () => {
	Api();
	window.scrollTo(0, 0);

	return (
		<>
			<Header />
			<AboutUs />
			<Footer />
		</>
	);
};
